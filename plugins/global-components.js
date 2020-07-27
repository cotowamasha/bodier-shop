import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

import 'vue-select/dist/vue-select.css'

import vSelect from 'vue-select'
import Button from '~/components/ui/elements/Button.vue'
import Input from '~/components/ui/elements/Input.vue'
import Textarea from '~/components/ui/elements/Textarea.vue'
import File from '~/components/ui/elements/File.vue'
import Checkbox from '~/components/ui/elements/Checkbox.vue'

Vue.component('VBtn', Button)
Vue.component('VInput', Input)
Vue.component('VSelect', vSelect)
Vue.component('VTxt', Textarea)
Vue.component('VFile', File)
Vue.component('VCheck', Checkbox)

// Vue.use(VueScrollTo)

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
