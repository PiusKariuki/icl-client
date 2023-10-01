import {createApp, h} from 'vue'
import 'maz-ui/css/main.css'
import './style.css'
import App from './App.vue'
import router from "@/shared/router/router.js";
import Spinner from "@/shared/components/Spinners/Spinner.vue";
import pinia from "@/shared/stores/index.js";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faBandage,
    faBars,
    faCheck,
    faPlus,
    faRectangleList,
    faTimes,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";
library.add(faCheck, faBars, faTimes, faUserPlus, faBandage, faRectangleList, faPlus)

const app = createApp({
    render: () => h(App)
})

app
    .use(router)
    .use(pinia)
    .component('spinner', Spinner)
    .component('EasyDataTable', Vue3EasyDataTable)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
