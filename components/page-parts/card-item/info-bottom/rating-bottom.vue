<template>
  <div class="rating-bottom">
    <div
      v-for="(item, i) of feedback"
      :key="i"
      class="rating-bottom--progress"
    >
      {{ item.name }}
      <progress
        :value="item.count"
        :max="countFeedback"
        class="progress"
      />
      <p>{{ item.count }}</p>
    </div>
    <v-btn
      class="btn--center btn-medium btn-black"
    >
      Написать отзыв
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'RatingBottom',
  data () {
    return {
      feedback: [
        {
          name: '5 звезд',
          count: 15
        },
        {
          name: '4 звезы',
          count: 6
        },
        {
          name: '3 звезы',
          count: 2
        },
        {
          name: '2 звезы',
          count: 3
        },
        {
          name: '1 звезда',
          count: 1
        }
      ],
      countFeedback: 27
    }
  }
}
</script>
