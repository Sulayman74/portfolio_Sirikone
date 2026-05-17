import { Reveal } from './Reveal';

export function Apps() {
  return (
    <section className="section section--dark" id="apps">
      <div className="container">
        <Reveal>
          <p className="section__label">Apps mobiles</p>
          <h2 className="section__title text-4xl md:text-5xl font-extrabold text-white">
            Une dizaine d'apps<br />sur l'AppStore &amp; PlayStore
          </h2>
        </Reveal>

        <div className="apps-grid">
          <Reveal delay={100} className="app-card app-card--featured">
            <div className="app-card__top">
              <span className="app-card__icon">🕌</span>
              <span className="badge badge--blue">iOS Native</span>
            </div>
            <h3 className="app-card__name">Muslim Clock</h3>
            <p className="app-card__desc">
              Application native iOS construite avec le nouveau langage visuel
              <strong>LiquidGlass</strong> d'Apple. Horaires de prière précis, direction de la Qibla,
              et expérience immersive.
            </p>
            <div className="app-card__tags">
              <span className="tag tag--sm">Swift</span>
              <span className="tag tag--sm">LiquidGlass</span>
              <span className="tag tag--sm">iOS 26</span>
            </div>
          </Reveal>

          <Reveal delay={200} className="app-card">
            <div className="app-card__top">
              <span className="app-card__icon">📱</span>
              <span className="badge badge--blue">×10 apps</span>
            </div>
            <h3 className="app-card__name">EcoClubSports Apps</h3>
            <p className="app-card__desc">
              Plusieurs applications mobiles déployées pour des clubs sportifs en Haute-Savoie
              et en Suisse — chaque club dispose de sa propre app personnalisée.
            </p>
            <div className="app-card__tags">
              <span className="tag tag--sm">AppStore</span>
              <span className="tag tag--sm">PlayStore</span>
            </div>
          </Reveal>

          <Reveal delay={300} className="app-card">
            <div className="app-card__top">
              <span className="app-card__icon">🚀</span>
            </div>
            <h3 className="app-card__name">Et bien d'autres...</h3>
            <p className="app-card__desc">
              Des applications dans différents domaines, publiées sur l'AppStore et le PlayStore.
              Tu veux en savoir plus ? Parlons-en.
            </p>
            <a href="#contact" className="btn btn--ghost btn--sm">Me contacter →</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
