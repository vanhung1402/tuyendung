import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Mixins from './plugins/mixins'
import VueFileAgent from 'vue-file-agent'
import 'vue-file-agent/dist/vue-file-agent.css'
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.material.locale.dateFormat = 'dd/MM/yyyy'
Vue.material.locale.shorterDays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
Vue.material.locale.cancel = 'Hủy'
Vue.material.locale.days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']
Vue.material.locale.shortDays = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']
Vue.material.locale.firstDayOfAWeek = 1
Vue.material.locale.months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
Vue.material.locale.shortMonths = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
Vue.material.locale.shorterMonths = ['T.1', 'T.2', 'T.3', 'T.4', 'T.5', 'T.6', 'T.7', 'T.8', 'T.9', 'T.10', 'T.11', 'T.12']
Vue.material.locale.startYear = 1970
Vue.material.locale.endYear = new Date().getFullYear()

Vue.use(DatePickerPlugin)
Vue.use(VueFileAgent)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.mixin(Mixins)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
