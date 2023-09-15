import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
   faExclamation,
   faCheckCircle,
   faTimes,
   faHandSparkles,
   faHamburger
} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faExclamation, faCheckCircle, faTimes, faHandSparkles, faHamburger )


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
