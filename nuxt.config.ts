export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        {
          property: "og:title",
          content: "ViewTube Wiki"
        },
        {
          property: "og:description",
          content: "The open source, privacy-conscious way to enjoy your favorite YouTube content."
        },
        {
          property: "og:image",
          content: "/viewtube_cover.png"
        }
      ]
    }
  },

  css: ["@/assets/fonts/expletus.css"],

  modules: ["@nuxt/devtools"]
});
