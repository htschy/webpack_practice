import "./reactApp.jsx";
import my from "./my.js";
import "../stylesheets/main.scss"; // scss の読み込み

import add from "./add.ts";

// Vue 3
import { createApp, h } from "vue";
import VueApp from "./VueApp.vue";
createApp(VueApp).mount("#vue-root");

console.log(add(3, 9));
console.log("webpack!");
my();
