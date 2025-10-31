import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "@fortawesome/fontawesome-free"; // Import FontAwesome
import router from './router';
import './assets/main.css'; 

createApp(App).use(router).mount('#app');