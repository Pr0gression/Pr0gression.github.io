import { createRouter, createWebHistory } from "vue-router";
import HelloWolrd from "../home/home.vue";

const routes = [
  {
    path: "/",
    component: HelloWolrd,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
