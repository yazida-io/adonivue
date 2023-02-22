import { createApp } from 'vue'
import Home from '@/pages/Home.vue'
import '@/assets/styles/app.css'

const app = createApp(Home)

app.mount('#client-app')
