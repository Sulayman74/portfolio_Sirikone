import { useGithubRepos } from '../hooks/useGithubRepos';
import { Reveal } from './Reveal';

export function GithubRepos() {
  const { repos, loading, error } = useGithubRepos('Sulayman74');

  return (
    <section className="section section--dark" id="github">
      <div className="container">
        <Reveal>
          <p className="section__label">Derniers Projets</p>
          <h2 className="section__title text-4xl md:text-5xl font-extrabold text-white">
            Mes derniers dépôts GitHub
          </h2>
        </Reveal>

        {loading && <p>Chargement des dépôts...</p>}
        {error && <p className="text-red-500">Erreur: {error}</p>}

        {!loading && !error && (
          <div className="apps-grid">
            {repos.map((repo, index) => (
              <Reveal key={repo.id} delay={index * 100} className="app-card">
                <div className="app-card__top">
                  <span className="app-card__icon">📦</span>
                  {repo.language && <span className="badge badge--blue">{repo.language}</span>}
                </div>
                <h3 className="app-card__name">{repo.name}</h3>
                <p className="app-card__desc">
                  {repo.description || "Aucune description disponible pour ce dépôt."}
                </p>
                <div className="app-card__tags">
                  <span className="tag tag--sm">⭐ {repo.stargazers_count}</span>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="tag tag--sm hover:bg-blue-500/20">Voir ↗</a>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
