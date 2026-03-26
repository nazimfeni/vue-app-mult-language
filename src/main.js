import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

console.log('App starting...');

const app = createApp(App)

console.log('App created');

app.use(i18n)

console.log('i18n installed');

app.mount('#app')

console.log('App mounted');