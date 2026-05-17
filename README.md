# 🚀 Portfolio Sirikone KEOHAVONG

Bienvenue sur le code source de mon portfolio professionnel. En tant que **Concepteur Développeur Full-Stack & Créateur d'applications mobiles** (diplômé RNCP 31678), cet espace sert à la fois de vitrine pour mes réalisations (applications natives, SaaS multi-tenant) et de démonstration technique de mon savoir-faire frontend.

## ✨ Fonctionnalités

- **Progressive Web App (PWA)** : Installable sur mobile et bureau grâce à `vite-plugin-pwa` et aux Service Workers (Workbox). Stratégie de mise en cache pour une expérience offline fluide.
- **Récupération Dynamique (API GitHub)** : Intégration d'un Hook personnalisé `useGithubRepos` pour l'affichage en temps réel de mes derniers projets publics directement via l'API GitHub.
- **Animations Avancées** : Utilisation de l'API `IntersectionObserver` via un composant React custom (`Reveal`) pour déclencher des animations au défilement (Scroll) et fluidifier la lecture.
- **Design System & Architecture** : UI "Dark Mode" premium avec des reflets et flous (Glassmorphism), architecturé selon les principes SOLID avec un découpage en composants React.

## 🛠️ Stack Technique

Ce portfolio a été entièrement refactorisé pour garantir des performances optimales et un excellent score Lighthouse :

- **Framework** : [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler** : [Vite 8](https://vitejs.dev/)
- **Stylisation** : [Tailwind CSS v4](https://tailwindcss.com/)
- **PWA** : [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- **CI/CD** : Déploiement automatisé via GitHub Actions sur GitHub Pages.

## 📦 Installation & Lancement en local

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/Sulayman74/portfolio_Sirikone.git
   cd portfolio_Sirikone
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```
   Le projet sera accessible sur `http://localhost:5173`.

4. **Générer le build de production :**
   ```bash
   npm run build
   ```

## 📧 Me contacter

Un projet de développement ? Une mission freelance ?
- **Email** : [keohavong.sirikone@gmail.com](mailto:keohavong.sirikone@gmail.com)
- **LinkedIn** : [Sirikone Keohavong](https://www.linkedin.com/in/sirikone-keohavong/)
- **GitHub** : [@Sulayman74](https://github.com/Sulayman74)

---
*Design et développement : Sirikone KEOHAVONG © 2026*
