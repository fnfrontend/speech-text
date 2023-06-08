import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import FileSelector from 'vue-file-selector';
import 'vue-file-selector/dist/main.css';
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App);

app.use(FileSelector);
app.use(Notifications);
app.use(router);

app.mount('#app');
