// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  components: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})