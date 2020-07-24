<template>
  <layout
    :bg="authBlock.bg"
    :box="authBlock.box"
    @close="close()"
  >
    <div class="modal-default">
      <v-btn
        class="btn-close"
        @click="close()"
      >
        <img src="/svg/close.svg">
      </v-btn>
      <div class="sign-in">
        <div class="sign-in__title">
          {{ num === 1 ?'Создать аккаунт' : 'Вход в личный кабинет' }}
        </div>
        <div class="sign-in__media">
          <n-link
            v-for="(item, i) of media"
            :key="i"
            :to="item.to"
          >
            <img
              :src="`/svg/${item.img}`"
              :class="`img-${i+1}`"
            >
          </n-link>
        </div>
        <component
          :is="component[num]"
        />
      </div>
      <div
        v-if="num === 0"
        class="modal-bottom"
      >
        У вас еще нет аккаунта?
        <v-btn
          @click="num = 1"
        >
          Зарегистрироваться
        </v-btn>
      </div>
      <div
        v-else
        class="modal-bottom"
      >
        Уже есть аккаунт?
        <v-btn
          @click="num = 0"
        >
          Авторизоваться
        </v-btn>
      </div>
    </div>
  </layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Layout from './layout'
import SingUp from './sign-up'
import SignIn from './sign-in'

export default {
  name: 'AuthBlock',
  components: {
    Layout
  },
  data () {
    return {
      component: [SignIn, SingUp],
      num: 0,
      singUp: SingUp,
      signIn: SignIn,
      media: [
        {
          to: '/',
          img: 'vk.svg'
        },
        {
          to: '/',
          img: 'f.svg'
        },
        {
          to: '/',
          img: 'inst-w.svg'
        }
      ]
    }
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
