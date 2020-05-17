import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home")
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: () => import("@/views/Accounts")
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/Auth")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("access_token");

  if (to.name !== "Auth" && !isAuthenticated) {
    next({ name: "Auth" });
  } else {
    next();
  }
});

export default router;
