import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  server: {
    proxy: {
      "/v1": {
        target: "http://localhost:8081",
        changeOrigin: true,
      },
    },
  },
});
