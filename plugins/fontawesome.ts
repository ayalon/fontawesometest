import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowAltCircleDown,
  faArrowDown,
  faArrowUp,
  faBars,
  faBell,
  faBriefcase,
  faCircle,
  faEllipsisV,
  faFingerprint,
  faLink,
  faLongArrowAltRight,
  faMapMarkerAlt,
  faNewspaper,
  faSearch,
  faTimes,
  faUniversity,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import {
  faAngular,
  faJsSquare,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineNuxtPlugin } from '#app'

config.autoAddCss = false

library.add(
  // solid
  faArrowUp,
  faArrowDown,
  faMapMarkerAlt,
  faBriefcase,
  faUniversity,
  faCircle,
  faFingerprint,
  faNewspaper,
  faUserCircle,
  faLink,
  faBell,
  faEllipsisV,
  faSearch,
  faArrowAltCircleDown,
  faLongArrowAltRight,
  faBars,
  faTimes,
  // brand
  faReact,
  faJsSquare,
  faAngular,
  faVuejs
)

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  nuxtApp.vueApp.config.productionTip = true

  nuxtApp.vueApp.component('Fa', FontAwesomeIcon)
})
