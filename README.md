# Personal Site — An Jiaqi

React portfolio for GitHub Pages user site: https://an6483472-cmd.github.io/

## Stack

- React 19 + Vite 8
- React Router 7
- Tailwind CSS 4

## Routes

- `/` Home
- `/about` Biography & Nodes
- `/works` Works index
- `/works/:workId` Work detail
- `/contact` Contact

## Develop

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages → `/docs`)

```bash
npm run build   # writes static site to docs/
git add docs
git commit -m "..."
git push
```

Then in the repo: **Settings → Pages → Deploy from a branch → `main` / `/docs`**.

Site URL: https://an6483472-cmd.github.io/

## Content

Edit copy under `src/data/`. Put CV under `public/assets/`.
