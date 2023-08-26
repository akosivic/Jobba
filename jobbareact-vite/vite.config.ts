import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/akosivic/Jobba",
  plugins: [react()],
  server: {
    port: 3000,
    // headers: {
    //   "Content-Security-Policy": "frame-ancestors 'http://localhost/'"
    // }
    // proxy: {
    //   '/auth/*': {
    //     target: 'http://localhost:8080/*',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/auth/, ''),
    //   }
    // }  
  }
});
