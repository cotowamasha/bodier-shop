<template>
  <div class="good">
    <n-link to="/card-item">
      <img
        :src="`/img/goods/${good.img}`"
        class="good__img"
      >
    </n-link>
    <div class="good__info">
      <div class="good__price">
        {{ good.price }}p
        <old-price
          v-if="good.old_price"
          :price="good.old_price"
        />
      </div>
      <div class="good__rating">
        <img src="/svg/rating.svg">
        {{ good.rating }}
      </div>
    </div>
    <div class="good__name">
      {{ good.title }}
    </div>
    <div class="good__btn">
      <v-btn
        class="btn--center btn-grey--bg btn-medium"
      >
        В корзину
      </v-btn>
    </div>
  </div>
</template>

<script>
import OldPrice from './old-price'

export default {
  name: 'Good',
  components: {
    OldPrice
  },
  props: {
    good: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
