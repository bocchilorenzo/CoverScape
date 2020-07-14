import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import titleMixin from './mixins/titleMixin'

Vue.mixin(titleMixin)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')