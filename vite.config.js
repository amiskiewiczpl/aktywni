import { defineConfig } from 'vite'


export default defineConfig({
// Jeśli strona jest pod https://twojlogin.github.io/REPO_NAME/ ustaw base tak:
base: '/aktywni/',
build: {
outDir: 'docs'
}
})