<template>
  <header class="header container">
    <div class="header-left">
      <Logo />
      <div class="header__menu">
        <Menu
          :menu="menu"
          class-name="header"
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
        <v-btn
          @click="isShowMiniCart = !isShowMiniCart"
        >
          <img src="/svg/cart.svg">
        </v-btn>
        <p
          v-if="cartItems.length"
          class="header__cart--count"
          @click="isShowMiniCart = !isShowMiniCart"
        >
          {{ totalCount }}
        </p>
      </div>
    </div>
    <CartMini
      v-show="isShowMiniCart && cartItems.length"
      :cart-items="cartItems"
    />
  </header>
</template>

<script>
import Logo from '~/components/shared/logo'
import Menu from '~/components/shared/menu'
import CartMini from '~/components/page-parts/cart/cart-mini'

export default {
  name: 'Header',
  components: {
    CartMini,
    Menu,
    Logo
  },
  data () {
    return {
      isShowMiniCart: false,
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
      user: {
        auth: false,
        name: 'Виктория'
      },
      cartItems: [
        {
          img: 'good4.png',
          name: 'Сексуальная шелковая ночнушка',
          price: '850',
          color: 'Черный',
          size: '80А',
          count: 1
        },
        {
          img: 'good7.png',
          name: 'Сексуальная шелковая ночнушка',
          price: '1340',
          old_price: '1840',
          color: 'Черный',
          size: '80А',
          count: 1
        },
        {
          img: 'good4.png',
          name: 'Сексуальная шелковая ночнушка',
          price: '850',
          color: 'Черный',
          size: '80А',
          count: 1
        },
        {
          img: 'good7.png',
          name: 'Сексуальная шелковая ночнушка',
          price: '1340',
          old_price: '1840',
          color: 'Черный',
          size: '80А',
          count: 1
        }
      ]
    }
  },
  computed: {
    totalCount () {
      return this.cartItems.reduce((totalCount, el) => {
        return totalCount + el.count
      }, 0)
    }
  }
}
</script>
