import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: process.env.DEPLOY_BASE_URL,
  build: {
    
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        biografia: path.resolve(__dirname, 'biografia.html'),
        contactos: path.resolve(__dirname, 'contactos.html'),
      },
    },
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    minify: 'esbuild',
  },

  css: {
    preprocessorOptions: {
      less: {},
    },
  },
})