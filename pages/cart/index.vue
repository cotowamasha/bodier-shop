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
        ref="cartItem"
        :item="item"
        :index="i"
        @remove="remove(i)"
        @increase="increaseCount(i)"
        @decrease="decreaseCount(i)"
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
          all_colors: [
            {
              label: 'Синий',
              value: 'Синий'
            },
            {
              label: 'Черный',
              value: 'Черный'
            }
          ],
          size: '70D',
          all_sizes: [
            {
              label: '70D',
              value: '70D'
            },
            {
              label: '80A',
              value: '80A'
            }
          ],
          count: 1,
          price: '1130'
        },
        {
          img: 'good5.png',
          name: 'SeamlessFLEX',
          type: 'Бюстгальтер',
          color: 'Черный',
          all_colors: [
            {
              label: 'Синий',
              value: 'Синий'
            },
            {
              label: 'Черный',
              value: 'Черный'
            }
          ],
          size: '80A',
          all_sizes: [
            {
              label: '70D',
              value: '70D'
            },
            {
              label: '80A',
              value: '80A'
            }
          ],
          count: 1,
          price: '850'
        },
        {
          img: 'good7.png',
          name: 'Infinity Lingerie',
          type: 'Бюстгальтер',
          color: 'Синий',
          all_colors: [
            {
              label: 'Синий',
              value: 'Синий'
            },
            {
              label: 'Черный',
              value: 'Черный'
            }
          ],
          size: '70D',
          all_sizes: [
            {
              label: '70D',
              value: '70D'
            },
            {
              label: '80A',
              value: '80A'
            }
          ],
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
  },
  methods: {
    remove (i) {
      this.cartItems.splice(i, 1)
    },
    increaseCount (i) {
      this.cartItems[i].count += 1
    },
    decreaseCount (i) {
      this.cartItems[i].count -= 1
    }
  }
}
</script>
