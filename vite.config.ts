import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  publicDir: "static",
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));
