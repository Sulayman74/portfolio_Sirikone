import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio_Sirikone/', // Nécessaire pour GitHub Pages
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'images/favicon-16x16.png',
        'images/favicon-32x32.ico',
        'images/apple-touch-icon.png'
      ],
      manifest: {
        name: 'Sirikone KEOHAVONG Portfolio',
        short_name: 'Sirikone',
        description: 'Portfolio de Sirikone KEOHAVONG — Concepteur Développeur Full-Stack',
        theme_color: '#07070f',
        background_color: '#07070f',
        display: 'standalone',
        start_url: '/portfolio_Sirikone/',
        scope: '/portfolio_Sirikone/',
        icons: [
          {
            src: 'images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'images/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
