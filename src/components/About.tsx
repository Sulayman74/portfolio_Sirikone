import { Reveal } from './Reveal';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about">
          <Reveal className="about__photo">
            <img 
              src={`${import.meta.env.BASE_URL}images/sulayman.jpg`} 
              alt="Sirikone KEOHAVONG" 
              className="about__img border-2 border-blue-500/30 shadow-[0_0_40px_rgba(79,142,247,0.2)]" 
            />
            <div className="about__photo-glow"></div>
          </Reveal>
          <Reveal direction="right" className="about__content">
            <p className="section__label">À propos</p>
            <h2 className="about__title text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent pb-2">
              Bonjour,<br />je suis Sirikone KEOHAVONG
            </h2>
            <p className="about__text text-lg mt-4">
              Concepteur Développeur Full-Stack diplômé RNCP 31678 en mars 2023,
              je conçois et développe des applications web et mobiles de A à Z —
              de l'architecture backend à l'interface utilisateur.
            </p>
            <p className="about__text text-lg">
              Mon dernier projet phare, <strong>EcoClubSports by Kappsi</strong>, m'a valu
              d'intégrer <strong className="text-blue-400">SporTech France</strong> et le <strong className="text-yellow-400">Village by CA</strong>
              (incubateur Crédit Agricole).
            </p>
            <p className="about__text text-lg">
              En micro-entreprise depuis octobre 2023, je travaille sur des projets ambitieux —
              SAAS multi-tenant, apps natives iOS avec LiquidGlass,
              et une dizaine d'apps publiées sur l'AppStore et le PlayStore.
            </p>
            <a href="#contact" className="btn btn--primary mt-6">Travaillons ensemble →</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
