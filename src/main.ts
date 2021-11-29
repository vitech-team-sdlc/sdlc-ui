import { createApp } from 'vue'
import App from '@/App.vue'

import { router } from '@/router'
import { store } from '@/store/create-store'

import '@/assets/styles/main.scss'
import '@/assets/icons/style.css'

createApp(App).use(store).use(router).mount('#app')
