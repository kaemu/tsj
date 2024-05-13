import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router.js'
import { i18n } from './i18n.js'
import { createHead } from '@unhead/vue'

createApp(App)
    .use(router)
    .use(createHead())
    .use(i18n)
    .mount('#app')
