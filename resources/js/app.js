require('./bootstrap');

import { createApp } from 'vue'
import App from './vue/app.vue'


export const eventBus = createApp(App)

createApp(App).mount('#app')

