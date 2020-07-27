<template>
  <form class="sign-in__form">
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
      Войти
    </v-btn>
    <div class="forget">
      <n-link
        to="/"
      >
        Забыли пароль?
      </n-link>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>
