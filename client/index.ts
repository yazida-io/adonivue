import { createApp } from 'vue'
import router from './plugins/router'
import '@/assets/styles/app.css'
import App from '@/App.vue'

const app = createApp(App)

app.use(router)

app.mount('#client-app')
