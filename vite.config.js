import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Natenergy.github.sitio/', // Asegúrate de que esto coincide con tu repo
});
