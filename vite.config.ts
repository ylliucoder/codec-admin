import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import UnoCss from "unocss/vite";
import { convertEnv } from "./vite/env";

// https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       "~": path.resolve(__dirname, "src"),
//     },
//   },
//   plugins: [vue(), UnoCss()],
// });

export default defineConfig(({ command, mode }) => {
  const viteEnv = convertEnv(loadEnv(mode, process.cwd()));
  return {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    },
    plugins: [vue(), UnoCss()],
  };
});
