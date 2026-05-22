import { Reveal } from './Reveal';

/** Clubs suisses mis en avant (données vérifiées sur l'App Store — développeur Kappsi). */
const FEATURED = [
  { name: 'Meyrin FC', emoji: '⚽', badge: 'Semi-pro', badgeMod: 'badge--gold', detail: 'Promotion League · Genève' },
  { name: 'Lancy FC', emoji: '⚽', badge: 'Semi-pro', badgeMod: 'badge--gold', detail: 'Promotion League · Genève' },
  { name: 'CS Chênois', emoji: '⭐', badge: 'Emblématique', badgeMod: 'badge--blue', detail: '1ère Ligue · Genève' },
];

const SWISS = ['Meyrin FC', 'Lancy FC', 'CS Chênois', 'FC Onex', 'PLO 1930'];
const FRENCH = ['CS Saint-Pierre', 'Marnaz FC', 'ES Douvaine-Loisin', 'FC Foron', 'Annemasse Handball'];

/**
 * Section « Partenariats » : met en avant les clubs équipés sous la marque Eco Club Sports,
 * et la progression amateur → semi-pro (clubs suisses de Promotion League).
 */
export function Partners() {
  return (
    <section className="section" id="partenariats">
      <div className="container">
        <Reveal>
          <p className="section__label">Partenariats</p>
          <h2 className="section__title text-4xl md:text-5xl font-extrabold text-white">
            Du club amateur<br />au club semi-pro
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="partners-intro">
            Sous la marque <strong>Eco Club Sports</strong>, j'ai conçu et déployé les applications
            officielles d'une dizaine de clubs sportifs. Le projet a démarré avec des clubs amateurs
            de Haute-Savoie, puis a convaincu des clubs <strong>semi-professionnels suisses</strong>.
            La meilleure preuve qu'un produit tient ses promesses, c'est quand des structures de plus
            en plus exigeantes l'adoptent à leur tour.
          </p>
        </Reveal>

        {/* Parcours amateur → semi-pro */}
        <div className="partners-path">
          <Reveal delay={150} className="partners-path__step">
            <span className="partners-path__tag">Les débuts</span>
            <h3 className="partners-path__name">Clubs amateurs</h3>
            <p className="partners-path__desc">
              Premières apps officielles pour des clubs régionaux de Haute-Savoie
              &amp; du canton de Genève.
            </p>
          </Reveal>

          <span className="partners-path__arrow" aria-hidden="true">→</span>

          <Reveal delay={250} className="partners-path__step partners-path__step--hl">
            <span className="partners-path__tag partners-path__tag--hl">Aujourd'hui</span>
            <h3 className="partners-path__name">Clubs semi-pros</h3>
            <p className="partners-path__desc">
              Adoption par des clubs de <strong>Promotion League</strong> suisse —
              Meyrin FC &amp; Lancy FC, montés en 2025.
            </p>
          </Reveal>
        </div>

        {/* Clubs suisses phares */}
        <Reveal delay={150}>
          <h3 className="partners-subtitle">À la une — les clubs suisses</h3>
        </Reveal>

        <div className="apps-grid">
          {FEATURED.map((club, i) => (
            <Reveal key={club.name} delay={200 + i * 100} className="app-card">
              <div className="app-card__top">
                <span className="app-card__icon">{club.emoji}</span>
                <span className={`badge ${club.badgeMod}`}>{club.badge}</span>
              </div>
              <h3 className="app-card__name">{club.name}</h3>
              <p className="partner-card__detail">{club.detail}</p>
            </Reveal>
          ))}
        </div>

        {/* L'ensemble des clubs équipés */}
        <div className="partners-lists">
          <Reveal delay={150} className="partners-col">
            <p className="partners-col__head">🇨🇭 Suisse — Genève</p>
            <div className="partners-col__items">
              {SWISS.map((name) => <span key={name} className="tag">{name}</span>)}
            </div>
          </Reveal>

          <Reveal delay={250} className="partners-col">
            <p className="partners-col__head">🇫🇷 France — Haute-Savoie</p>
            <div className="partners-col__items">
              {FRENCH.map((name) => <span key={name} className="tag">{name}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
