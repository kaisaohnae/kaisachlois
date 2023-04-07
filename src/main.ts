import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router';

import { globalCookiesConfig } from "vue3-cookies";

import './assets/css/reset.css';
import './assets/css/common.css';

/*import formInterceptors from './config/axios-form-interceptor';
import jsonInterceptors from './config/axios-json-interceptor';

formInterceptors();
jsonInterceptors();*/

const store = createPinia();
const app = createApp(App);

globalCookiesConfig({
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
  });

app.use(router);
app.use(store);
app.mount('#app');
