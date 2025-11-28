import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Safely polyfill process.env for the browser to prevent "process is not defined" errors
    // while still allowing access to API_KEY if it exists in the build environment.
    'process.env': {
      API_KEY: process.env.API_KEY || ''
    }
  }
});