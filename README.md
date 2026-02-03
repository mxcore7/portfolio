# Portfolio - Blondeau Moukam Homeni

[![Deploy to GitHub Pages](https://github.com/mxcore7/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/mxcore7/portfolio/actions/workflows/deploy.yml)

> Portfolio professionnel bilingue (EN/FR) pour Blondeau Moukam Homeni - Python Developer & ERP Odoo Specialist

🌐 **Site en ligne** : [https://mxcore7.github.io/portfolio/](https://mxcore7.github.io/portfolio/)

---

## 🎯 À Propos

Portfolio moderne et professionnel conçu pour présenter mes compétences et expériences en tant que :
- **Développeur Python** spécialisé en ERP Odoo
- **Ingénieur Logiciel** & Solutions d'Affaires
- Expert en personnalisation et déploiement de systèmes ERP

Ouvert aux opportunités internationales au **Canada** et en **Europe**.

---

## ✨ Fonctionnalités

- 🌍 **Bilingue** : Support complet Anglais/Français avec changement instantané
- 🌓 **Mode Sombre/Clair** : Thème adaptatif avec détection des préférences système
- 📱 **Responsive** : Design optimisé pour mobile, tablette et desktop
- ⚡ **Performance** : Build optimisé (129.19 kB gzippé)
- 🎨 **Design Premium** : Glassmorphisme, animations fluides, palette moderne
- 📄 **Téléchargement CV** : Bouton de téléchargement direct du CV
- 🚀 **SEO Optimisé** : Meta tags et structure sémantique

---

## 🛠️ Technologies

- **React 19** - Framework UI moderne
- **Vite 7** - Build tool ultra-rapide
- **TailwindCSS 3** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **react-i18next** - Internationalisation
- **Lucide React** - Icônes élégantes

---

## 📋 Sections

1. **Hero** - Présentation avec CTA et téléchargement CV
2. **À Propos** - Profil professionnel et points forts
3. **Compétences** - Technologies et expertises (5 catégories)
4. **Expérience** - Timeline de 7 postes professionnels
5. **Projets** - Showcase de 3 projets clés
6. **Services** - 6 services proposés
7. **Contact** - Formulaire et informations de contact

---

## 🚀 Installation & Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/mxcore7/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173/`

### Build de production
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

---

## 📦 Déploiement

Le site est automatiquement déployé sur **GitHub Pages** via GitHub Actions.

### Déploiement automatique
Chaque push sur la branche `main` déclenche automatiquement :
1. Build du projet
2. Déploiement sur GitHub Pages
3. Site mis à jour à [https://mxcore7.github.io/portfolio/](https://mxcore7.github.io/portfolio/)

### Workflow
Le fichier `.github/workflows/deploy.yml` gère le déploiement automatique.

---

## 📂 Structure du Projet

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── cv-blondeau-moukam.pdf  # CV téléchargeable
├── src/
│   ├── components/             # Composants React
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── i18n/                   # Internationalisation
│   │   ├── locales/
│   │   │   ├── en.json        # Traductions anglaises
│   │   │   └── fr.json        # Traductions françaises
│   │   └── i18n.js
│   ├── App.jsx
│   ├── index.css              # Styles globaux + TailwindCSS
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🎨 Personnalisation

### Modifier les couleurs
Éditez `tailwind.config.js` pour changer la palette de couleurs :
```javascript
colors: {
  primary: {
    600: '#2563eb',  // Couleur principale
    // ...
  }
}
```

### Ajouter du contenu
Les traductions se trouvent dans `src/i18n/locales/` :
- `en.json` - Contenu anglais
- `fr.json` - Contenu français

### Mettre à jour le CV
Remplacez `public/cv-blondeau-moukam.pdf` par votre nouveau CV.

---

## 📊 Performance

- ⚡ **Build Time** : ~8.5s
- 📦 **Bundle Size** : 129.19 kB (gzippé)
- 🎯 **Lighthouse Score** : 90+ (attendu)
- 📱 **Mobile-First** : Entièrement responsive

---

## 📞 Contact

**Blondeau Moukam Homeni**

- 📧 Email : [moukamblondeau@gmail.com](mailto:moukamblondeau@gmail.com)
- 📱 Téléphone : +237 697 624 219 / +237 679 194 803
- 📍 Localisation : Douala, Cameroun
- 🌐 Portfolio : [https://mxcore7.github.io/portfolio/](https://mxcore7.github.io/portfolio/)

---

## 📄 Licence

© 2026 Blondeau Moukam Homeni. Tous droits réservés.

---

## 🙏 Remerciements

Construit avec ❤️ en utilisant React, Vite, et TailwindCSS.

Design inspiré par Apple, Stripe, Linear et Vercel.
