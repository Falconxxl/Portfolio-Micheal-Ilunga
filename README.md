# Michael Ilunga — Portfolio 2026

Portfolio personnel de Michael Ilunga (Falconxxl), développeur créatif multidisciplinaire — développement front-end, branding, audiovisuel et production musicale.

## Objectif

Présenter les projets, services et compétences de Michael Ilunga à travers un site vitrine multilingue (FR / EN / NL), avec des sections dédiées au web design, à la photographie, à la vidéo, à la musique et au branding.

## Technologies utilisées

- React 19 — bibliothèque UI
- React Router DOM 7 — routing
- i18next / react-i18next — internationalisation (FR, EN, NL)
- EmailJS — envoi de formulaires de contact/devis sans backend
- React Helmet Async — gestion des balises head (SEO)
- Lucide React / React Icons — icônes
- React Scroll — navigation par ancrage
- react-scripts (Create React App) — build et tooling

## Fonctionnalités principales

- Site multilingue (français, anglais, néerlandais)
- Présentation de services : web design, branding, photographie, vidéo, musique
- Galerie de projets avec modales détaillées
- Formulaire de demande de devis intégré (EmailJS)
- Navigation responsive avec menu hamburger mobile
- Témoignages clients par catégorie de service
- Pages légales (mentions, conditions de vente, politique de confidentialité)

## Organisation du projet

src/
- Components/     Composants réutilisables (modales, boutons, formulaires, i18n)
- Data/           Données statiques (catégories, etc.)
- JSONTraductor/  Fichiers de traduction (fr, en, nl, pt)
- Layout/         Sections de mise en page réutilisables
- Links/          Pages liées aux services et pages légales
- Pages/          Pages principales (Home, About, Contact, Projects, etc.)
- Assets/         Logos et images de marque
- Images/         Visuels des projets
- MyVideos/       Vidéos utilisées dans le site
- Pdf/            CV téléchargeables (FR, EN, NL)

## Installation et lancement en local

git clone URL_DU_REPO
cd michael-2026-portfolio
npm install --legacy-peer-deps
npm start

Le site sera accessible sur http://localhost:3000.

Note : --legacy-peer-deps est nécessaire en raison d'un conflit de peer dependencies entre react-scripts et la version de TypeScript utilisée par i18next.

## Build de production

npm run build

Le build optimisé est généré dans le dossier build/.

## Déploiement

Le projet est configuré pour un déploiement sur Netlify :

- Commande de build : npm run build
- Dossier de publication : build
- Redirection SPA configurée (netlify.toml + public/_redirects) pour le bon fonctionnement de React Router
- Variable d'environnement CI=false pour éviter que les warnings ESLint ne bloquent le build

## Auteur

Michael Ilunga (Falconxxl)
Next Éclat — nexteclat.com
E
cat > README.md << 'EOF'
# Michael Ilunga — Portfolio 2026

Portfolio personnel de Michael Ilunga, développeur créatif multidisciplinaire — développement front-end, branding, audiovisuel et production musicale.

## Objectif

Présenter les projets, services et compétences de Michael Ilunga à travers un site vitrine multilingue (FR / EN / NL), avec des sections dédiées au web design, à la photographie, à la vidéo, à la musique et au branding.

## Technologies utilisées

- React 19 — bibliothèque UI
- React Router DOM 7 — routing
- i18next / react-i18next — internationalisation (FR, EN, NL)
- EmailJS — envoi de formulaires de contact/devis sans backend
- React Helmet Async — gestion des balises head (SEO)
- Lucide React / React Icons — icônes
- React Scroll — navigation par ancrage
- react-scripts (Create React App) — build et tooling

## Fonctionnalités principales

- Site multilingue (français, anglais, néerlandais)
- Présentation de services : web design, branding, photographie, vidéo, musique
- Galerie de projets avec modales détaillées
- Formulaire de demande de devis intégré (EmailJS)
- Navigation responsive avec menu hamburger mobile
- Témoignages clients par catégorie de service
- Pages légales (mentions, conditions de vente, politique de confidentialité)

## Organisation du projet

src/
- Components/     Composants réutilisables (modales, boutons, formulaires, i18n)
- Data/           Données statiques (catégories, etc.)
- JSONTraductor/  Fichiers de traduction (fr, en, nl, pt)
- Layout/         Sections de mise en page réutilisables
- Links/          Pages liées aux services et pages légales
- Pages/          Pages principales (Home, About, Contact, Projects, etc.)
- Assets/         Logos et images de marque
- Images/         Visuels des projets
- MyVideos/       Vidéos utilisées dans le site
- Pdf/            CV téléchargeables (FR, EN, NL)

## Installation et lancement en local

git clone URL_DU_REPO
cd michael-2026-portfolio
npm install --legacy-peer-deps
npm start

Le site sera accessible sur http://localhost:3000.

Note : --legacy-peer-deps est nécessaire en raison d'un conflit de peer dependencies entre react-scripts et la version de TypeScript utilisée par i18next.

## Build de production

npm run build

Le build optimisé est généré dans le dossier build/.

## Déploiement

Le projet est configuré pour un déploiement sur Netlify :

- Commande de build : npm run build
- Dossier de publication : build
- Redirection SPA configurée (netlify.toml + public/_redirects) pour le bon fonctionnement de React Router
- Variable d'environnement CI=false pour éviter que les warnings ESLint ne bloquent le build
