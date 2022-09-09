import { createApp } from 'vue'
import App from "./App";
import {Vuelidate} from "vuelidate";
import router from "@/router/router";
import store from "@/store";



createApp(App)
    .use(Vuelidate)
    .use(store)
    .use(router)
    .mount('#app')
