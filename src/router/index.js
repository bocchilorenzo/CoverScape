import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import search from '../views/search.vue'
import about from '../views/about.vue'
import album from '../views/album.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:q',
    name: 'search',
    component: search,
  },
  {
    path: '/deezer/:id',
    name: 'deezer',
    component: album
  },
  {
    path: '/itunes/:idArtist/:collectionId',
    name: 'itunes',
    component: album
  },
  {
    path: "/lastfm/:artist/:title/:coverUrl",
    name: "lastfm",
    component: album
  },
  {
    path: '/reddit/:id',
    name: 'reddit',
    component: album
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]

const router = new VueRouter({
  saveScrollPosition: false,
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});
export default router
