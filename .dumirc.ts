import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/ForestDesign/',
  publicPath: '/ForestDesign/',
  favicons: ['/ForestDesign/logo.svg'],
  themeConfig: {
    name: 'Forest Design',
    logo: '/ForestDesign/logo.svg',
  },
});
