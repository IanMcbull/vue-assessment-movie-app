import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Toast,{POSITION} from "vue-toastification";
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast,{
    // Setting the global default position
    position: POSITION.TOP_LEFT
})

app.mount('#app')
