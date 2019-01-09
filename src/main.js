// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'

import FastClick from 'fastclick'
import polyills from './utils/polyfills.js'

polyills()
FastClick.attach(document.body);

Vue.config.productionTip = false
require('./assets/css/common.css')
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
