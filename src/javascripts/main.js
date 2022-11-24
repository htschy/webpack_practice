import "./reactApp.jsx";
import my from "./my.js";
import "../stylesheets/main.scss"; // scss の読み込み

// Vue 3
import { createApp, h } from "vue";
import VueApp from "./VueApp.vue";
createApp(VueApp).mount("#vue-root");

console.log("webpack!");
my();
