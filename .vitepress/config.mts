import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ViewTube Wiki',
  description:
    'Documentation for ViewTube, the open source, privacy-conscious way to enjoy your favorite YouTube content.',
  srcDir: 'content',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    sidebar: generateSidebar({
      documentRootPath: 'content',
      sortMenusByFrontmatterOrder: true,
      useTitleFromFrontmatter: true,
      useTitleFromFileHeading: true,
      capitalizeFirst: true,
      useFolderTitleFromIndexFile: true,
      includeFolderIndexFile: false,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/viewtube/viewtube' },
    ],
  },
  rewrites: {
    'content/2.installation/1.installation': 'installation/installation',
  },
  cleanUrls: true,
});
