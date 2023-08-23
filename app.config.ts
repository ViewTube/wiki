export default defineAppConfig({
  docus: {
    title: 'ViewTube Wiki',
    description: 'The open source, privacy-conscious way to enjoy your favorite YouTube content.',
    image: '/viewtube_cover.png',

    socials: {
      github: 'viewtube/viewtube'
    },

    github: {
      dir: 'content',
      branch: 'main',
      repo: 'wiki',
      owner: 'viewtube',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: false
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: false,
      title: 'ViewTube Wiki'
    },

    footer: {
      credits: {
        icon: 'mdi:play',
        text: 'Visit ViewTube',
        href: 'https://viewtube.io'
      }
    },

    titleTemplate: '%s · ViewTube Wiki'
  }
})