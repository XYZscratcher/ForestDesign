import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: 'ForestDesign',
  publicPath: 'ForestDesign',
  favicons: ['/logo.svg'],
  themeConfig: {
    name: 'Forest Design',
    logo: '/logo.svg',
  },
});
