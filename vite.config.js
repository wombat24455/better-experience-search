import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [preact()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        discover: resolve(root, 'discover', 'index.html'),
        all: resolve(root, 'all', 'index.html'),
        about: resolve(root, 'about', 'index.html')
      }
    }
  }
})
