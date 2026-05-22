import { useRegisterSW } from 'virtual:pwa-register/react';

/**
 * Notifie l'utilisateur quand une nouvelle version du site est disponible.
 * En mode `registerType: 'prompt'`, le nouveau service worker reste en attente :
 * « Recharger » envoie SKIP_WAITING puis recharge la page pour appliquer la mise à jour.
 */
export function UpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div className="install-banner update-banner" role="alert" aria-live="polite">
      <span className="update-banner__badge" aria-hidden="true">
        <RefreshIcon />
      </span>

      <div className="install-banner__body">
        <p className="install-banner__title">Nouvelle version disponible</p>
        <p className="install-banner__text">Rechargez pour profiter de la dernière version.</p>
      </div>

      <div className="install-banner__actions">
        <button
          type="button"
          className="install-banner__btn"
          onClick={() => updateServiceWorker(true)}
        >
          <RefreshIcon />
          Recharger
        </button>
        <button
          type="button"
          className="install-banner__close"
          onClick={() => setNeedRefresh(false)}
          aria-label="Plus tard"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

function RefreshIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
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
