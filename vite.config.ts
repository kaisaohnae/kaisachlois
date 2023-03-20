import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

console.log(process.env.NODE_ENV);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
		VueSetupExtend()
  ],
	base: './',
	optimizeDeps: {},
  build: {
  },
  server: {
    https: false,
    /*
    정적 gitPage에 올리기위해 proxy 를 사용하지 않고 api 에서 cors 를 허용 
    proxy: {
      '/bo': {
        target: apiUrl,
        ws: true,
        changeOrigin: true
      },
      '/crs': {
        target: apiUrl,
        ws: true,
        changeOrigin: true
      },
      '/auth': {
        target: apiUrl,
        ws: true,
        changeOrigin: true
      }
    },*/
  },
})
