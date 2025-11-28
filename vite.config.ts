import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This creates a global process.env object in the browser that mimics Node.js
    // ensuring 'process.env.API_KEY' access does not crash the app.
    'process.env': JSON.stringify({
      API_KEY: process.env.API_KEY || '',
      NODE_ENV: process.env.NODE_ENV || 'development'
    })
  },
  build: {
    chunkSizeWarningLimit: 1000,
  }
});