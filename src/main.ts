import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router';

import './assets/css/reset.css';
import './assets/css/common.css';

import './assets/css/tui-grid.css';
import './assets/css/tui-grid-datepicker.css';

/*import formInterceptors from './config/axios-form-interceptor';
import jsonInterceptors from './config/axios-json-interceptor';

formInterceptors();
jsonInterceptors();*/

const store = createPinia();
const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
