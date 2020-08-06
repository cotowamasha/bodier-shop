<template>
  <div
    v-if="cartHover.bg"
    class="cart-mini"
    @mouseleave="close()"
  >
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
    <v-btn
      class="btn--center btn-black btn-medium"
      @click="goTo('/cart'), close()"
    >
      Перейти в корзину
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
    ...mapState('layout', ['cartHover']),

    totalPrice () {
      return this.cartItems.reduce((totalPrice, el) => {
        return totalPrice + +el.price * el.count
      }, 0)
    }
  },
  methods: {
    ...mapMutations('layout', ['CHANGE_STATE']),

    remove (i) {
      this.cart.splice(i, 1)
    },

    close () {
      this.CHANGE_STATE({
        type: 'cartHover',
        data: {
          bg: false
        }
      })
    },

    goTo (link) {
      this.$router.push(link)
    }
  }
}
</script>
