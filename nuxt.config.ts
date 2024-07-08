export default defineNuxtConfig({
  content: {
    experimental: {
      search: true as any,
    },
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        {
          property: 'og:title',
          content: 'ViewTube Wiki',
        },
        {
          property: 'og:description',
          content:
            'The open source, privacy-conscious way to enjoy your favorite YouTube content.',
        },
        {
          property: 'og:image',
          content: '/viewtube_cover.png',
        },
      ],
    },
  },

  css: ['~/assets/fonts/expletus.css', '~/assets/fonts/notosans.css'],
  modules: ['@nuxt/devtools', '@nuxt/content', '@nuxt/image'],
  compatibilityDate: '2024-07-08',
})
