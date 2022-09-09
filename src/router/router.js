import UserPage from "@/pages/UserPage";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import UpdatePage from "@/pages/UpdatePage";


const routes = [
    {
        path: '/',
        component: UserPage
    },
    {
        path: "/update",
        component: UpdatePage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;