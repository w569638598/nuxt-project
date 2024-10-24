// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  sourcemap: {
    server: false,
    client: false
  },
  devtools: { enabled: true },
  css: ['~/assets/scss/pub.scss'],
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { name: 'description', content: 'My amazing Nuxt appMy amazing Nuxt appMy amazing Nuxt app' }
      ]
    }
  },
  nitro: { minify: true, compressPublicAssets: true }
})
