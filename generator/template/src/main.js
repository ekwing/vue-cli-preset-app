import '@/utils/flexible.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import installPlugins from './plugins'
import installComponents from './components'
import mixins from './mixins/base'

Vue.config.productionTip = false

installPlugins(Vue)
installComponents(Vue)
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
