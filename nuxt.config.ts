// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  sourcemap: {
    server: false,
    client: false
  },
  // build: {
  //   analyze: {
  //     analyzerMode: 'static'
  //   }
  // },
  // buildDir: 'dist',
  devtools: { enabled: false },
  css: ['~/assets/magic.min.css', '~/assets/main.scss'],
  app: {
    head: {
      title: '影划算官网 - 特惠电影票服务商，提供一站式电影票营销解决方案。',
      meta: [
        { name: 'keywords', content: '影划算电影票,影划算票务,电影票接口,电影票API,电影票SaaS系统,电影票小程序,特价影票,5折电影票,特惠电影票,电影票学生价,电影票订购平台' },
        { name: 'description', content: '影划算电影票提供全国电影院在线购票服务系统搭建，独立研发特价电影票优惠购票SaaS系统，支持微信/支付宝小程序系统搭建，自主品牌OEM、多种营销模式、分销系统实时结算，并提供开放平台API接口技术对接。' }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/base.scss" as *;`
        }
      }
    }
  },
  nitro: { minify: true, compressPublicAssets: true }
})
