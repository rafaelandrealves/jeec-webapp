// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Navbar from './components/Navbar'
import Home_Top_Content from './components/Home_Top_Content'
import Why_Attend from './components/Why_Attend'
import Contacts from './components/Contacts'
import Our_Activities from './components/Our_Activities'
import Who_Are_We from './components/Who_Are_We'


Vue.config.productionTip = false

// Home page components
Vue.component('navbar', Navbar)
Vue.component('home-top', Home_Top_Content)
Vue.component('who-are-we', Who_Are_We)
Vue.component('why-attend', Why_Attend)
Vue.component('contacts', Contacts)
Vue.component('ouractivities', Our_Activities)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})