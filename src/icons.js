import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faComments, faSave, faBell, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faComments, faSave, faBell, faCogs)

Vue.component('font-awesome-icon', FontAwesomeIcon)
