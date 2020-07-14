import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import titleMixin from './mixins/titleMixin'
import imgLoaderMixin from './mixins/imgLoaderMixin'
import scrollToTopMixin from './mixins/scrollToTopMixin'

Vue.mixin(titleMixin)
Vue.mixin(imgLoaderMixin)
Vue.mixin(scrollToTopMixin)
Vue.config.productionTip = false

/* eslint-disable */
var vm = new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')