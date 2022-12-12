import { createRouter, createWebHashHistory } from "vue-router";
import { useEventStore } from "../store/eventStore";
const routes = [
  {
    path: "/",
    component: () => import("../views/Page.vue"),
    name: "page",
  },
  {
    path: "/page-another",
    component: () => import("../views/PageAnother.vue"),
    name: "page.another",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let emitter = useEventStore();
  emitter.emit("asyncComponentLoading", { show: true, showRouterView: false }); // Start
  next();
});

router.beforeResolve((to, from, next) => {
  let emitter = useEventStore();
  emitter.emit("asyncComponentLoaded", { show: false, showRouterView: true }); // Stop
  next();
});

export default router;
