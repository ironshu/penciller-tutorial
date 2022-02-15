import Vue from 'vue'
import App from './App.vue'
import Ui from '@shustudios/ui'

Vue.use(Ui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
