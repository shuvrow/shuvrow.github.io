import './assets/main.css'
import './assets/tailwind.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";

import ElementPlus from 'element-plus'
import "element-plus/dist/index.css";
const app = createApp(App)

// createApp(App).use(globalComponents).use(VueCookies, { expires: '7d'}).use(VueAxios, axios).use(store).use(router).use(ElementPlus).mount('#app')
createApp(App).use(router).use(ElementPlus).mount('#app')
