import { Reveal } from './Reveal';

export function Realisations() {
  return (
    <section className="section" id="realisations">
      <div className="container">
        <Reveal>
          <p className="section__label">Réalisation phare</p>
        </Reveal>

        <div className="feature">
          <Reveal className="feature__content">
            <div className="feature__badges">
              <span className="badge badge--gold">⭐ SporTech France</span>
              <span className="badge badge--gold">⭐ Village by CA</span>
              <span className="badge badge--blue">AppStore</span>
              <span className="badge badge--blue">PlayStore</span>
            </div>
            <h2 className="feature__title text-4xl md:text-5xl font-extrabold text-white">
              EcoClubSports
              <span className="feature__subtitle">by Kappsi</span>
            </h2>
            <p className="feature__desc">
              Applications mobiles personnalisées pour clubs sportifs amateurs et semi-professionnels.
              Chaque club dispose de sa propre app brandée — gestion d'équipe, calendriers de matchs,
              statistiques joueurs, publicité sponsors avec tracking ROI et gamification.
            </p>

            <div className="feature__stats">
              <div className="stat">
                <span className="stat__value">15+</span>
                <span className="stat__label">Clubs actifs</span>
              </div>
              <div className="stat">
                <span className="stat__value">4.8★</span>
                <span className="stat__label">127 avis</span>
              </div>
              <div className="stat">
                <span className="stat__value">4</span>
                <span className="stat__label">Sports couverts</span>
              </div>
            </div>

            <div className="feature__sports">
              <span className="sport-tag">⚽ Football</span>
              <span className="sport-tag">🏀 Basketball</span>
              <span className="sport-tag">🤾 Handball</span>
              <span className="sport-tag">🏉 Rugby</span>
            </div>

            <a href="https://ecoclubsports.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Voir le projet ↗
            </a>
          </Reveal>

          <Reveal direction="right" className="feature__visual">
            <div className="feature__accolades">
              <div className="accolade">
                <div className="accolade__icon">🏆</div>
                <div>
                  <p className="accolade__label">Sélectionné par</p>
                  <p className="accolade__name">SporTech France</p>
                </div>
              </div>
              <div className="accolade">
                <div className="accolade__icon">🏦</div>
                <div>
                  <p className="accolade__label">Incubé au</p>
                  <p className="accolade__name">Village by CA</p>
                  <p className="accolade__detail">Crédit Agricole</p>
                </div>
              </div>
            </div>
            <div className="feature__screen">
              <img src="/images/screens.jpg" alt="EcoClubSports — aperçu des apps" className="feature__img" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
