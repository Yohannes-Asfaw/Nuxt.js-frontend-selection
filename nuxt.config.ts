// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  css: ['~/assets/css/tailwind.css'],
 router: {
    base: '/Nuxt.js-frontend-selection/',
  },
  
  // Vite configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Tailwind content paths
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false, // If you don't want to expose Tailwind config globally
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
} as any)
