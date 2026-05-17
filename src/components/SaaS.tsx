import { Reveal } from './Reveal';

export function SaaS() {
  return (
    <section className="section" id="saas">
      <div className="container">
        <div className="saas">
          <Reveal className="saas__content">
            <p className="section__label">SAAS Multi-tenant</p>
            <h2 className="saas__title text-4xl md:text-5xl font-extrabold text-white">Snacking Platform</h2>
            <p className="saas__desc">
              Plateforme click &amp; collect multi-tenant pour snacks et fast-foods.
              Chaque enseigne dispose de sa propre instance avec menu personnalisé,
              programme de fidélité, commandes en temps réel et notifications push.
            </p>
            <ul className="saas__features">
              <li><span className="check">✓</span> Architecture multi-tenant scalable</li>
              <li><span className="check">✓</span> PWA installable (iOS &amp; Android)</li>
              <li><span className="check">✓</span> Programme fidélité &amp; gamification</li>
              <li><span className="check">✓</span> QR Code &amp; commandes temps réel</li>
              <li><span className="check">✓</span> Notifications push intégrées</li>
            </ul>
            <div className="saas__tech">
              <span className="tag">Angular</span>
              <span className="tag">Firebase</span>
              <span className="tag">PWA</span>
              <span className="tag">TypeScript</span>
            </div>
            <a href="https://snacking-template.web.app" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Voir la démo ↗
            </a>
          </Reveal>

          <Reveal direction="right" className="saas__visual">
            <div className="saas__card">
              <div className="saas__card-header">
                <span className="saas__card-dot saas__card-dot--red"></span>
                <span className="saas__card-dot saas__card-dot--yellow"></span>
                <span className="saas__card-dot saas__card-dot--green"></span>
                <span className="saas__card-url">snacking-template.web.app</span>
              </div>
              <div className="saas__card-body">
                <div className="saas__mock-item">
                  <div className="saas__mock-icon" style={{ background: '#16a34a' }}></div>
                  <div>
                    <div className="saas__mock-line saas__mock-line--lg"></div>
                    <div className="saas__mock-line saas__mock-line--sm"></div>
                  </div>
                </div>
                <div className="saas__mock-item">
                  <div className="saas__mock-icon" style={{ background: '#2563eb' }}></div>
                  <div>
                    <div className="saas__mock-line saas__mock-line--lg"></div>
                    <div className="saas__mock-line saas__mock-line--sm"></div>
                  </div>
                </div>
                <div className="saas__mock-item">
                  <div className="saas__mock-icon" style={{ background: '#7c3aed' }}></div>
                  <div>
                    <div className="saas__mock-line saas__mock-line--lg"></div>
                    <div className="saas__mock-line saas__mock-line--sm"></div>
                  </div>
                </div>
                <div className="saas__pwa-badge">
                  <span>📲</span> PWA — Installable
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
