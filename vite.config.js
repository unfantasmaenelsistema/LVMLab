import { defineConfig } from 'vite';

// App estática (todo el simulador vive en index.html; Lucide desde CDN con versión fija):
// Vite compila Tailwind, empaqueta el script y copia el logo. Base relativa: funciona en
// GitHub Pages (/LVMLab/) y en cualquier subcarpeta.
export default defineConfig({
  base: './',
});
