import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowDown, faCartPlus, faBoxOpen, faUserFriends, faMars, faBirthdayCake, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowUp, faArrowDown, faCartPlus, faBoxOpen, faUserFriends, faMars, faBirthdayCake, faInfoCircle )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
