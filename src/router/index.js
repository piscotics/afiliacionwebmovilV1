import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    to.matched.some((record) => {

      let allowedEnter = true;
      let isLoggedIn = store.state.user_authenticated.isAuthenticated;

      if('meta' in record) {
        if (record.meta.requiresAuth) {
          if(!isLoggedIn) {
            allowedEnter = false;
            next({
              path: '/',
              replace: true,
              query: { redirect: to.fullPath }
            });
          }
        }
      }

      if (allowedEnter) {
        next();
      }
    })
  });

  return Router
}
