<template>
  <form class="sign-in__form">
    <div class="sign-in__form-line">
      <v-input
        holder="Имя"
      />
    </div>
    <div class="sign-in__form-line">
      <v-input
        holder="E - Mail"
      />
    </div>
    <div class="sign-in__form-line">
      <v-input
        holder="Пароль"
        type="password"
      />
    </div>
    <v-btn
      class="btn--center btn-medium btn-black"
    >
      Зарегистрироваться
    </v-btn>
  </form>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
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
  }
}
</script>
