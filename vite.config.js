import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project sites live at /<repo-name>/; set GITHUB_PAGES_BASE in CI.
const base = process.env.GITHUB_PAGES_BASE || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
