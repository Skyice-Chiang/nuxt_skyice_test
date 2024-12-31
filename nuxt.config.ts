// import tw from './i18n/locales/tw.js';
// import en from './i18n/locales/en.js';
// import ja from './i18n/locales/ja.js';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // 環境變數載入做全域使用
  runtimeConfig: {
      public: {
          GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
          SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID
      }
  },
  // 全域head資訊
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt_skyice_test/' : '/',
    buildAssetsDir: '/static/',
    head: {
      meta: [
        { name: 'charest', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'author', content: 'Skyice' }
      ],
      link: [
        { rel: 'icon', href: '/logo.png' },
      ],
    }
  },

  // 支援舊瀏覽器，自動補上前綴詞兼容
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead'],
      },
    },
  },
  css: [ '~/assets/scss/app.scss', 'bootstrap-icons/font/bootstrap-icons.css'],

  modules: [
    '@nuxtjs/i18n',
    'nuxt-swiper',
    '@nuxtjs/leaflet',
    '@vee-validate/nuxt',
    '@nuxt/image',
    '@nuxt/content',
  ],

  i18n: {
    baseUrl: '/',
    langDir: 'locales',
    locales: [
      { "code": "tw", "language": "zh-TW", "file": 'tw' },
      { "code": "en", "language": "en", "file": 'en' },
      { "code": "ja", "language": "ja", "file": 'ja' }
    ],
    defaultLocale: 'tw',
    strategy: 'prefix_except_default',
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  image: {
    inject: true,
    format: [ 'avif', 'webp'], //全域優先優化成avif和webp，如果都不支援就jpg上陣
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    }
  },
})