import { createApp } from 'vue'
import router from './plugins/router'
import pinia from './plugins/pinia'
import vuetify from './plugins/vuetify'

import '@/assets/styles/app.css'

import App from '@/App.vue'

const app = createApp(App)

app.use(vuetify)

app.use(pinia)

app.use(router)

app.mount('#client-app')
