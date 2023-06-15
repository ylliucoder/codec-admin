import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import UnoCss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue(), UnoCss()],
});
