<template>
  <layout
    :bg="authBlock.bg"
    :box="authBlock.box"
    @close="close()"
  >
    <div class="modal-default">
      asd
    </div>
  </layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Layout from './layout'

export default {
  name: 'AuthBlock',
  components: {
    Layout
  },
  computed: {
    ...mapState('layout', ['authBlock'])
  },
  methods: {
    ...mapMutations('layout', ['CHANGE_STATE']),

    close () {
      this.CHANGE_STATE({
        type: 'authBlock',
        data: {
          bg: false,
          box: false
        }
      })
    }
  }
}
</script>
