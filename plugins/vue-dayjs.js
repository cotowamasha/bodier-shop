import Vue from 'vue'
import dayjs from 'dayjs'

import 'dayjs/locale/ru'
import utc from 'dayjs/plugin/utc'

dayjs.locale('ru')
dayjs.extend(utc)

Vue.prototype.$dayjs = dayjs
