import Vue from 'vue';
import Router from 'vue-router'

import AppHeader from '@/layout/AppHeader'
import AppFooter from '@/layout/AppFooter'
import Components from '@/views/Components.vue'
import About from '@/views/About.vue'

Vue.use(Router)

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: 'Trang tuyển dụng LOCIFA | Trang chủ'
    },
    components: {
      header: AppHeader,
      default: Components,
      footer: AppFooter,
    },
  },
  {
    path: "/about",
    name: "About",
    components: {
      header: AppHeader,
      default: About,
      footer: AppFooter,
    },
  },
];

const router = new Router({
  mode: "history",
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;