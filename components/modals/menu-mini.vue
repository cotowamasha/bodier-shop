<template>
  <LayoutMenu
    :bg="menuBlock.bg"
    :box="menuBlock.box"
    @close="close()"
  >
    <div class="modal-menu">
      <v-btn
        class="btn-close"
        @click="close()"
      >
        <img src="/svg/close.svg">
      </v-btn>
      <Menu
        :menu="menu"
        class-name="header"
        @close="close()"
      />
    </div>
  </LayoutMenu>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import LayoutMenu from './layout-menu'
import Menu from '~/components/shared/menu'

export default {
  name: 'MenuMini',
  components: {
    LayoutMenu,
    Menu
  },
  data () {
    return {
      menu: [
        {
          to: '/',
          name: 'Главная'
        },
        {
          to: '/catalog/classic',
          name: 'Каталог'
        },
        {
          to: '/blog',
          name: 'Блог'
        },
        {
          to: '/about',
          name: 'О нас'
        },
        {
          to: '/contacts',
          name: 'Контакты'
        }
      ]
    }
  },
  computed: {
    ...mapState('layout', ['menuBlock'])
  },
  methods: {
    ...mapMutations('layout', ['CHANGE_STATE']),

    close () {
      this.CHANGE_STATE({
        type: 'menuBlock',
        data: {
          bg: false,
          box: false
        }
      })
    }
  }
}
</script>
