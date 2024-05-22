import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill, CoSearch, MdEmail, CoCodacy, CoTrash } from 'oh-vue-icons/icons'

const app = createApp(App)
addIcons(FaFlag, RiZhihuFill, CoSearch, MdEmail, CoCodacy, CoTrash);
app.use(router)
app.component("v-icon", OhVueIcon)
app.mount('#app')
