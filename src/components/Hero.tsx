export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow hero__glow--1"></div>
      <div className="hero__glow hero__glow--2"></div>
      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__dot"></span>
          Disponible en freelance
        </div>
        <h1 className="hero__name">Sirikone KEOHAVONG</h1>
        <p className="hero__tagline">
          Concepteur Développeur Full-Stack<br />
          <span className="hero__tagline--accent">&amp; créateur d'apps mobiles</span>
        </p>
        <div className="hero__stack">
          <span className="tag">Angular 18</span>
          <span className="tag">React</span>
          <span className="tag">NestJS</span>
          <span className="tag">iOS Native</span>
          <span className="tag">Firebase</span>
          <span className="tag">PostgreSQL</span>
        </div>
        <div className="hero__ctas">
          <a href="#realisations" className="btn btn--primary">Voir mes réalisations</a>
          <a href="https://github.com/Sulayman74" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">GitHub ↗</a>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
