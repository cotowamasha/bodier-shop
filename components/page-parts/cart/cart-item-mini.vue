<template>
  <div class="cart-item-mini">
    <img :src="`/img/goods/${item.img}`">
    <div class="mini__content">
      <div class="mini__content--1">
        <p class="mini--name">
          {{ item.name }}
        </p>
        <div class="mini--price">
          {{ item.price }}p
          <old-price
            v-if="item.old_price"
            :price="item.old_price"
          />
        </div>
      </div>
      <div class="mini__content--2">
        <div class="mini--left">
          <p>Цвер</p>
          <p>Размер</p>
        </div>
        <div class="mini--middle">
          <p>{{ item.color }}</p>
          <p>{{ item.size }}</p>
        </div>
        <v-btn
          class="mini--btn"
        >
          <img src="/svg/remove.svg">
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import OldPrice from '~/components/shared/old-price'

export default {
  name: 'CartItemMini',
  components: {
    OldPrice
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
