# Bayu Pratama Putra — Portfolio

Personal portfolio website built with **Astro** and **Tailwind CSS**, designed to showcase my profile, technical skills, selected projects, and contact information in a modern, responsive, and interactive interface.

🌐 **Live Website:** [bayupratamaputra.vercel.app](https://bayupratamaputra.vercel.app)

## ✨ Features

- Responsive single-page portfolio
- English / Indonesian language switcher
- Language preference saved with `localStorage`
- Interactive navigation with smooth section highlighting
- Cursor glow effect
- Interactive Cursor Buddy with bilingual messages and easter eggs
- Project showcase with technology stacks
- Skills and professional skills sections
- Contact form that opens Gmail with a pre-filled message
- Downloadable CV
- SEO-friendly metadata
- Open Graph and Twitter Card metadata
- JSON-LD structured data
- Canonical URL
- Sitemap generation with `@astrojs/sitemap`
- `robots.txt`
- Deployed on Vercel

## 🛠️ Tech Stack

### Frontend

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- JavaScript
- HTML
- CSS

### Additional Tools

- Lottie Web Component
- Astro Sitemap
- Vercel

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── files/
│   ├── img/
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── cursorbuddy.astro
│   │   ├── cursorglow.astro
│   │   ├── hero.astro
│   │   ├── languageswitcher.astro
│   │   ├── navbar.astro
│   │   ├── projects.astro
│   │   └── skills.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
└── README.md