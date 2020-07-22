<template>
  <div class="cart-mini">
    <div class="cart-mini__items">
      <cart-item-mini
        v-for="(item, i) of cart"
        :key="i"
        :item="item"
        :index="i"
        @remove="remove(i)"
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
  data () {
    return {
      cart: this.cartItems
    }
  },
  computed: {
    totalPrice () {
      return this.cartItems.reduce((totalPrice, el) => {
        return totalPrice + +el.price * el.count
      }, 0)
    }
  },
  methods: {
    remove (i) {
      this.cart.splice(i, 1)
    }
  }
}
</script>
