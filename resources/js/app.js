import './bootstrap';

import Alpine from 'alpinejs';
import { createApp } from 'vue';
import axios from 'axios';
import IncrementCounter from './components/IncrementCounter.vue';
import Chat from './components/chat.vue';

window.Alpine = Alpine;
axios.defaults.baseURL = 'http://localhost:8000';
Alpine.start();

createApp({})
    .component('IncrementCounter', IncrementCounter)
    .component('Chat', Chat)
    .mount('#app')
