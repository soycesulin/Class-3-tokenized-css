// vite.config.js — BUILD CONFIGURATION
// Vite is the build tool that bundles our app. Plugins extend what it can do.
// We add two plugins:
//   1. react()       — lets Vite understand JSX syntax
//   2. tailwindcss() — processes Tailwind classes and generates the final CSS

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // Scans your JSX for Tailwind classes and builds only the CSS you actually use
  ],
  root: 'src',
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    port: 5173,
    strictPort: false, // Allow fallback to next available port if 5173 is taken
  },
});
