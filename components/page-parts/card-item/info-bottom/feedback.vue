<template>
  <div class="feedback">
    <div class="feedback-top">
      <div class="feedback-name">
        <img
          v-if="feedback.img !== null"
          :src="`/img/feedback/${feedback.img}`"
        >
        <div
          v-else
          class="feedback-img"
        >
          {{ feedback.name[0] }}
        </div>
        <p>{{ feedback.name }}</p>
      </div>
      <div class="feedback-date">
        {{ feedback.date }}
        <div class="feedback-stars">
          <img
            v-for="(star, i) of stars"
            :key="i"
            :src="`/svg/${star}.svg`"
          >
        </div>
      </div>
    </div>
    <div class="feedback-text">
      {{ feedback.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  props: {
    feedback: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      stars: []
    }
  },
  mounted () {
    this.isStars()
  },
  methods: {
    isStars () {
      if (this.feedback.stars === 5) {
        this.stars = ['rating2', 'rating2', 'rating2', 'rating2', 'rating2']
      }
      if (this.feedback.stars === 4) {
        this.stars = ['rating2', 'rating2', 'rating2', 'rating2', 'rating']
      }
      if (this.feedback.stars === 3) {
        this.stars = ['rating2', 'rating2', 'rating2', 'rating', 'rating']
      }
      if (this.feedback.stars === 2) {
        this.stars = ['rating2', 'rating2', 'rating', 'rating', 'rating']
      }
      if (this.feedback.stars === 1) {
        this.stars = ['rating2', 'rating', 'rating', 'rating', 'rating']
      }
    }
  }
}
</script>
