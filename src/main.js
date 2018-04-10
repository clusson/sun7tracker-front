import Vue from 'vue'
import App from './App'
import VueCordova from 'vue-cordova'
Vue.use(VueCordova)
console.log(Vue.cordova)
Vue.config.productionTip = false

/* eslint-disable no-new */
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
