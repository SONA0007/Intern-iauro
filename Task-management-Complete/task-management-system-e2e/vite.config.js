// host-app/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app', 
      remotes: {
        'remote-login': 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'], 
    }),
  ],
  server: {
    proxy: {
      '/assets/remoteEntry.js': {
        target: 'http://localhost:5001', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});