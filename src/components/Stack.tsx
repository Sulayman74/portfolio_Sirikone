import { Reveal } from './Reveal';

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <Reveal>
          <p className="section__label">Compétences</p>
          <h2 className="section__title text-4xl md:text-5xl font-extrabold text-white">Stack technique</h2>
        </Reveal>

        <div className="stack-grid">
          <Reveal delay={100} className="stack-card">
            <div className="stack-card__icon">🎨</div>
            <h3 className="stack-card__title">Frontend</h3>
            <ul className="stack-card__list">
              <li>React &amp; Vite</li>
              <li>Angular 18 (Signals)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </Reveal>
          <Reveal delay={200} className="stack-card">
            <div className="stack-card__icon">📱</div>
            <h3 className="stack-card__title">Mobile</h3>
            <ul className="stack-card__list">
              <li>iOS Native (Swift)</li>
              <li>LiquidGlass</li>
              <li>PWA</li>
              <li>AppStore / PlayStore</li>
            </ul>
          </Reveal>
          <Reveal delay={300} className="stack-card">
            <div className="stack-card__icon">⚙️</div>
            <h3 className="stack-card__title">Backend</h3>
            <ul className="stack-card__list">
              <li>NestJS</li>
              <li>Node.js / Express</li>
              <li>REST API</li>
              <li>Firebase</li>
            </ul>
          </Reveal>
          <Reveal delay={400} className="stack-card">
            <div className="stack-card__icon">🗄️</div>
            <h3 className="stack-card__title">Data &amp; Infra</h3>
            <ul className="stack-card__list">
              <li>PostgreSQL</li>
              <li>Prisma ORM</li>
              <li>Git / GitHub</li>
              <li>AGILE / SCRUM</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={500} className="certification">
          <span className="cert-badge">RNCP 31678</span>
          <p>Concepteur Développeur d'Applications — diplômé mars 2023</p>
        </Reveal>
      </div>
    </section>
  );
}
