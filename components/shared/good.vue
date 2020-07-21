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
        <span v-if="good.old_price">
          {{ good.old_price }}p
        </span>
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
export default {
  name: 'Good',
  props: {
    good: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
