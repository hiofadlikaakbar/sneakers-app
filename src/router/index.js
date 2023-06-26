import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailPage from "../views/DetailPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail",
      name: "detail",
      component: DetailPage,
    },
  ],
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
export default router;
