<template>
  <div class="cart container">
    <section-title>
      <span class="path">
        Главная &nbsp;&nbsp;/&nbsp;&nbsp; Корзина
      </span>
    </section-title>
    <section-title>
      Корзина
    </section-title>
    <div class="cart__items">
      <cart-item
        v-for="(item, i) of cartItems"
        :key="i"
        :item="item"
      />
    </div>
    <div class="cart__total">
      <p>
        Общая сумма
      </p>
      <div class="cart__total--price">
        {{ totalPrice }}p
      </div>
      <v-btn
        class="btn--center btn-medium btn-black"
      >
        Оформить заказ
      </v-btn>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/shared/section-title'
import CartItem from '~/components/page-parts/cart/cart-item'

export default {
  name: 'CartPage',
  components: {
    CartItem,
    SectionTitle
  },
  data () {
    return {
      cartItems: [
        {
          img: 'good4.png',
          name: 'MISS X',
          type: 'Комплект белья',
          color: 'Синий',
          size: '70D',
          count: 1,
          price: '1130'
        },
        {
          img: 'good5.png',
          name: 'SeamlessFLEX',
          type: 'Бюстгальтер',
          color: 'Черный',
          size: '80A',
          count: 1,
          price: '850'
        },
        {
          img: 'good7.png',
          name: 'Infinity Lingerie',
          type: 'Бюстгальтер',
          color: 'Синий',
          size: '70D',
          count: 1,
          price: '1375'
        }
      ]
    }
  },
  computed: {
    totalPrice () {
      return this.cartItems.reduce((totalPrice, el) => {
        return totalPrice + +el.price * el.count
      }, 0)
    }
  }
}
</script>
