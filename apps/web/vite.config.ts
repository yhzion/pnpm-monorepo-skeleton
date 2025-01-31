import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: "./src/main.ts",
    },
  },
});
