import { createRouter, createWebHistory } from 'vue-router';
import Main from "./components/Main.vue"
import Dev from "./components/Dev.vue"
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/dev",
    name: "Dev",
    component: Dev,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router