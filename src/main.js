import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'

Vue.config.productionTip = false
import 'assets/maoyan.css'
import 'assets/reset.css'
import './filters/img'

new Vue({
  router,
  store,
  animated, 
  render: h => h(App)
}).$mount('#app')
