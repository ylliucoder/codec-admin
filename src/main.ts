import { createApp } from "vue";

import "@unocss/reset/tailwind.css";
import "~/styles/main.css";
import "virtual:uno.css";

import App from "~/App.vue";
import router from "~/router";

console.log(import.meta.env.VITE_API_URL);
const app = createApp(App);
app.use(router);
app.mount("#app");
