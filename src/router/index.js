import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import ProductsView from "../views/ProductsView.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/register",
            component: RegisterView,
        },
        {
            path: "/login",
            component: LoginView,
        },

    ],
});

export default router;