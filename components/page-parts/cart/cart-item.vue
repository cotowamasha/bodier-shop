<template>
  <div class="cart__item">
    <img
      :src="`/img/goods/${item.img}`"
      class="cart__item--img"
    >
    <p class="cart__item--name">
      {{ item.name }} / {{ item.type }}
    </p>
    <div class="cart__item--select">
      {{ item.color }}
      <img src="/svg/arr-bottom.svg">
    </div>
    <div class="cart__item--select">
      {{ item.size }}
      <img src="/svg/arr-bottom.svg">
    </div>
    <div class="cart__item--count">
      <v-btn
        class="btn-grey"
      >
        -
      </v-btn>
      {{ item.count }}
      <v-btn
        class="btn-grey"
      >
        +
      </v-btn>
    </div>
    <div class="cart__item--price">
      {{ item.price }}p
    </div>
    <div class="cart__item--remove">
      <v-btn>
        <img src="/svg/remove.svg">
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
  }
}
</script>
