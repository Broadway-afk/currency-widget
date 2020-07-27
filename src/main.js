import Vue from 'vue'
import App from './App.vue'
import ApiService from './services/api-service'
import 'swiper/css/swiper.css'

ApiService()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
