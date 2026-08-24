import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

/** GitHub Pages: disable Jekyll + SPA fallback for client routes */
function githubPages() {
  return {
    name: 'github-pages',
    closeBundle() {
      const outDir = resolve(import.meta.dirname, 'docs')
      writeFileSync(resolve(outDir, '.nojekyll'), '')
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// User site: https://an6483472-cmd.github.io/  → base must be '/'
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), githubPages()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
