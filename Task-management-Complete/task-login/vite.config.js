import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-login', 
      filename: 'remoteEntry.js', 
      exposes: {
        './Login': './src/components/Login.jsx', 
      },
      shared: ['react', 'react-dom'], 
    }),
  ],
  server: {
    cors: {
      origin: 'http://localhost:5173', 
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: true,
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});