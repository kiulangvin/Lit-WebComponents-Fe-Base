import { defineConfig } from 'vite';
import litCss from 'vite-plugin-lit-css';
import autoprefixer from 'autoprefixer';
import path from 'path';
export default defineConfig({
  root: 'example',
  assetsInclude: ['**/*.html'], // 让 Vite 不解析 HTML，直接当资源处理
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`
      }
    },
    postcss: {
      plugins: [ autoprefixer]
    }
  },
  plugins: [
    // 让 Vite 支持 Lit 组件里 css / scss
    litCss({
      include: ['**/*.scss', '**/*.css'],
    }),
  ],
});
