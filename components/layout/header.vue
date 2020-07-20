<template>
  <header class="header container">
    <div class="header-left">
      <Logo />
      <div class="header__menu">
        <Menu
          :menu="menu"
          className="header"
        />
      </div>
    </div>
    <div class="header-right">
      <div
        v-if="user.auth"
        class="header__profile"
      >
        <img src="/img/profile-mini.png">
        <n-link to="/profile">
          {{ user.name }}
        </n-link>
      </div>
      <v-btn
        v-else
        class="header__sign-in"
      >
        Войти
      </v-btn>
      <div class="header__cart">
        <v-btn>
          <img src="/svg/cart.svg">
        </v-btn>
        <p
          v-if="cart.length"
          class="header__cart--count"
        >
          {{ cart.length }}
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/shared/logo'
import Menu from '~/components/shared/menu'

export default {
  name: 'Header',
  components: {
    Menu,
    Logo
  },
  data () {
    return {
      menu: [
        {
          to: '/',
          name: 'Главная'
        },
        {
          to: '/catalog',
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
      ],
      cart: [],
      user: {
        auth: false,
        name: 'Виктория'
      }
    }
  }
}
</script>
