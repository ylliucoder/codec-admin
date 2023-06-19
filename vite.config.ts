import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import UnoCss from "unocss/vite";
import { convertEnv } from "./vite/env";
import { viteMockServe } from "vite-plugin-mock";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

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
  console.log(mode);

  const viteEnv = convertEnv(loadEnv(mode, process.cwd()));
  return {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      vue(),
      Pages(),
      Layouts(),
      UnoCss(),
      viteMockServe({
        mockPath: "mock",
        enable: true,
      }),
    ],
  };
});
