import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import App from './App.vue';
import Home from './components/Home.vue';
import Edit from './components/Edit.vue';
import Cart from './components/Cart.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'Home',
    path: '/home',
    component: Home
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Cart',
    path: '/cart',
    component: Cart
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')