import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app'
import store from './store'
import routers from './router'
import ElementUI from 'element-ui'
import Echarts from 'vue-echarts'
import * as filters from './filters'
import VueMoment from 'vue-moment'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueMoment)
Vue.component('chart', Echarts)

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routers,
  store: store,
  template: '<app/>',
  components: { app }
})

