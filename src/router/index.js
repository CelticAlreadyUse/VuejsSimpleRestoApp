import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import productDetail from '../views/detailcard.vue'
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/hoMe.vue')
  },
  {
    path:'/product',
    name:'Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/product.vue')
  },
  {
    path:'/success',
    name:'Success',
    component: () => import(/* webpackChunkName: "about" */ '../views/Success.vue')
  },
  { 
    path:'/cart',
    name:'Cart',
    component:()=> import('../views/cart.vue')
  },
  {
    path:'/product/:id',
    name:'Detail',
    component:productDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
