// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueCordova from 'vue-cordova'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
// Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true // created computed members from your variable declarations
})
Vue.use(VueCordova)

Vue.config.productionTip = false

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})
