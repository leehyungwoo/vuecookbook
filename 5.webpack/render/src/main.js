import Vue from 'vue'
import mycomponent from './mycomponent.vue'

new Vue({
  el: '#app',
  render: h => h('div',{},[h(mycomponent),h(mycomponent),h(mycomponent)])
})
