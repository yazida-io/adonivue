import { defineConfig } from 'vite'
import Adonis from '@adonisjs/vite-plugin-adonis'
import vuePlugin from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
    },
  },
  plugins: [
    vuePlugin(),
    Adonis({
      outputPath: 'public/assets',
      publicPath: '/assets',
      entryPoints: {
        main: ['resources/ts/app.ts'],
        client: ['client/index.ts'],
      },
    }),
  ],
})
