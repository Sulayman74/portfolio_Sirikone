import { useEffect, useState } from 'react';

/** Évènement Chromium non encore typé dans le DOM standard. */
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

const DISMISS_KEY = 'pwa-install-dismissed';
const ICON_SRC = `${import.meta.env.BASE_URL}images/android-chrome-192x192.png`;

/** L'app est-elle déjà lancée en mode installé (standalone) ? */
function isStandalone(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    // iOS Safari expose un flag non standard
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

/** Détecte iPhone/iPad (iPadOS 13+ se présente comme un Mac tactile). */
function isIOS(): boolean {
  const ua = window.navigator.userAgent;
  const iPhoneIpad = /iPad|iPhone|iPod/.test(ua);
  const iPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return iPhoneIpad || iPadOS;
}

/**
 * Bannière d'aide à l'installation de la PWA.
 * - Android / Chromium : capte `beforeinstallprompt` et propose un bouton « Installer ».
 * - iOS / Safari : pas de prompt natif, on affiche les étapes (Partager → Sur l'écran d'accueil).
 */
export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [iosMode, setIosMode] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isStandalone()) return; // déjà installée
    if (localStorage.getItem(DISMISS_KEY)) return; // déjà refusée par l'utilisateur

    const onBeforeInstall = (e: Event) => {
      e.preventDefault(); // on garde la main pour notre propre bannière
      setDeferred(e as BeforeInstallPromptEvent);
      setIosMode(false);
      setVisible(true);
    };
    const onInstalled = () => {
      setVisible(false);
      setDeferred(null);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);

    // iOS ne déclenche jamais beforeinstallprompt : on affiche les instructions.
    if (isIOS()) {
      setIosMode(true);
      setVisible(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, '1');
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="install-banner" role="dialog" aria-label="Installer l'application">
      <img className="install-banner__icon" src={ICON_SRC} alt="" width={48} height={48} />

      <div className="install-banner__body">
        <p className="install-banner__title">Installer l'application</p>
        {iosMode ? (
          <p className="install-banner__text">
            Appuyez sur <ShareIcon /> puis « Sur l'écran d'accueil » <PlusIcon />
          </p>
        ) : (
          <p className="install-banner__text">
            Ajoutez le portfolio à votre écran d'accueil pour un accès en un tap.
          </p>
        )}
      </div>

      <div className="install-banner__actions">
        {!iosMode && (
          <button type="button" className="install-banner__btn" onClick={install}>
            <DownloadIcon />
            Installer
          </button>
        )}
        <button
          type="button"
          className="install-banner__close"
          onClick={dismiss}
          aria-label="Fermer"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

/* ── Icônes inline (cohérentes avec le reste du site : SVG + currentColor) ── */

function ShareIcon() {
  return (
    <svg className="install-banner__inline-icon" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-label="Partager" role="img">
      <path d="M12 15V3" />
      <path d="m8 7 4-4 4 4" />
      <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="install-banner__inline-icon" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-label="Ajouter" role="img">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
