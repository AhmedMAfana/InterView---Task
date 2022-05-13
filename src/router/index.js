import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

// import store from '@/state/store'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueMeta, {
  // The component option name that vue-meta looks for meta info on.
  keyName: 'page',
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

// // Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
  
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired)
  const guestpage = routeTo.matched.some((route) => route.meta.guest)
 
  const loggeduser = localStorage.getItem('user');
  const userAuth = loggeduser ? JSON.parse(loggeduser) :  false

  if (authRequired && (!userAuth.authentication || !userAuth) ) {
    return next('/login');
  }else{
    next();
  }

  
  if( guestpage && userAuth.authentication) {
    return next('/dashboard');
  }
  
    
    
  
})

export default router
