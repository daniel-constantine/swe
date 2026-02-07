# Daniel Constantine — Portfolio

A minimalist, responsive software engineer portfolio built with **React + Vite**. Features a light/dark theme toggle, scroll-triggered animations, and a clean black & white aesthetic.

## Preview

Sections: **Hero** → **About** → **Experience** → **Projects** → **Contact**

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

## Project Structure

```
portfolio/
├── index.html            # Entry HTML (Vite serves this from root)
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── src/
    ├── main.jsx          # React mount point
    └── App.jsx           # Portfolio component (all-in-one)
```

## Getting Started

### 1. Install dependencies

```bash
cd portfolio
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000) with hot module replacement enabled.

### 3. Build for production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

### 4. Preview the production build

```bash
npm run preview
```

## Customization

| What to change       | Where to look                                      |
| -------------------- | -------------------------------------------------- |
| Name & bio           | Hero section + `about-text` paragraph in `App.jsx` |
| Work history         | `experiences` array at top of `App.jsx`            |
| Projects             | `projects` array at top of `App.jsx`               |
| Colors               | CSS variables in `:root` and `[data-theme="dark"]` |
| Fonts                | Google Fonts `@import` URL in `<style>`            |
| Social links         | Footer `<a>` tags                                  |
| Page title & favicon | `index.html` `<title>` and `<link rel="icon">`     |

## Deployment

Works with any static hosting provider:

- **Vercel**: `npx vercel`
- **Netlify**: `npm run build` then drag & drop `dist/`
- **GitHub Pages**: add `base: '/repo-name/'` to `vite.config.js`, build, and push `dist/` to `gh-pages` branch

## License

MIT — free for personal and commercial use.
