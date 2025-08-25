import { defineConfig } from 'vite';

export default defineConfig({
  base: '/aktywni/',          // <<< NAZWA REPO!
  build: { outDir: 'docs' }   // GitHub Pages serwuje folder 'docs' z gałęzi default
});