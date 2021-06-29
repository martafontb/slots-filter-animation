import Vue from 'vue'
import App from './App.vue'

import VAnimateCss from 'v-animate-css';
import JQuery from 'jquery'
window.$ = JQuery
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VAnimateCss);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
