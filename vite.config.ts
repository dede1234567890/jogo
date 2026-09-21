import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// No GitHub Pages, o site costuma ficar em /NOME-DO-REPOSITORIO/.
// Durante o deploy, GITHUB_REPOSITORY vem no formato usuario/repositorio.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
