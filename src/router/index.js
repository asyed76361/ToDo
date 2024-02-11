import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import Dashboard from "../components/dashboard/Dashboard.vue";
import CreateTodo from "../components/ToDo/Create.vue";
import WelcomeScreen from "../components/ToDo/WelcomeScreen.vue";
import { useAuthStore } from "@/store/auth-store";
import Update from "../components/Update/Update.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated && authStore.token !== null) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated && authStore.token !== null) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated && authStore.token !== null) {
        next();
      } else {
        next("/welcome");
      }
    },
  },
  {
    path: "/welcome",
    name: "welcome",
    component: WelcomeScreen,
  },
  {
    path: "/createtodo",
    name: "createtodo",
    component: CreateTodo,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated && authStore.token !== null) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/update/:id",
    name: "updatetodo",
    component: Update,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated && authStore.token !== null) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
