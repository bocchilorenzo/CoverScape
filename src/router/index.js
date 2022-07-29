import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search/:q',
    name: 'search',
    component: function () {
      return import(/* webpackChunkName: "search" */ '../views/search.vue')
    }
  },
  {
    path: '/deezer/:id',
    name: 'deezer',
    component: function () {
      return import(/* webpackChunkName: "album" */ '../views/album.vue')
    }
  },
  {
    path: '/itunes/:idArtist/:collectionId',
    name: 'itunes',
    component: function () {
      return import(/* webpackChunkName: "album" */ '../views/album.vue')
    }
  },
  {
    path: "/lastfm/:artist/:title/:coverUrl",
    name: "lastfm",
    component: function () {
      return import(/* webpackChunkName: "album" */ '../views/album.vue')
    }
  },
  {
    path: '/reddit/:id',
    name: 'reddit',
    component: function () {
      return import(/* webpackChunkName: "album" */ '../views/album.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/about.vue')
    }
  }
]

const router = new VueRouter({
  saveScrollPosition: false,
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});
export default router
