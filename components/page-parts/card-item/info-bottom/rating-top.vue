<template>
  <div class="rating-top">
    <div class="rating-top--stars">
      <img
        v-for="(star, i) of stars"
        :key="i"
        :src="`/svg/${star}.svg`"
      >
    </div>
    <p>{{ rating }}</p>
  </div>
</template>

<script>
export default {
  name: 'RatingTop',
  props: {
    stars: {
      type: Array,
      default: () => ([])
    },
    rating: {
      type: Number,
      default: 0
    }
  }
}
</script>
