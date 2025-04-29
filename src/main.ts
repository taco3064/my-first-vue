import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { App } from '@/containers';
import router from '@/pages';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
