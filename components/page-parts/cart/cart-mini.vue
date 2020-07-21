<template>
  <div class="cart-mini">
    <div class="cart-mini__items">
      <cart-item-mini
        v-for="(item, i) of cartItems"
        :key="i"
        :item="item"
      />
    </div>
    <div class="cart-mini__total">
      <p>Общая сумма</p>
      <div class="cart-mini__total-price">
        {{ totalPrice }}p
      </div>
    </div>
    <n-link
      to="/cart"
      class="btn btn--center btn-black btn-medium"
    >
      Перейти в корзину
    </n-link>
  </div>
</template>

<script>
import CartItemMini from './cart-item-mini'

export default {
  name: 'CartMini',
  components: {
    CartItemMini
  },
  props: {
    cartItems: {
      type: Array,
      default: () => ([])
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
