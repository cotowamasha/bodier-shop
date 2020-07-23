<template>
  <div class="card-info">
    <div class="card-rating">
      <div class="card-rating--left">
        <img
          v-for="(star, i) of stars"
          :key="i"
          :src="`/svg/${star}.svg`"
        >
        <p>{{ rating }}</p>
      </div>
      <n-link to="/card-item/feedback">
        28 Отзывов
      </n-link>
    </div>
    <div class="card-name">
      Бюстгальтер 2829 Bright Wave
    </div>
    <div class="card-price">
      1 130р
      <old-price
        :price="'1 830'"
      />
    </div>
    <div class="card-select">
      <p>Цвет:</p>
      <div class="card-select--check">
        <v-check
          v-for="(color, i) of colors"
          :id="`${i}`"
          :key="i"
          :value="color.active"
          :bg="color.bg"
          :color="color.color"
        />
      </div>
    </div>
    <div class="card-select">
      <p>Размер:</p>
      <v-select
        v-model="selected"
        :options="sizes"
      />
    </div>
    <v-btn
      class="btn-blue btn-medium btn--center"
    >
      Добавить в корзину
    </v-btn>
  </div>
</template>

<script>
import OldPrice from '~/components/shared/old-price'

export default {
  name: 'TopInfo',
  components: {
    OldPrice
  },
  props: {
    stars: {
      type: Array,
      default: () => ([])
    },
    rating: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      selected: 'Не выбран',
      sizes: [
        {
          label: '70D',
          value: '70D'
        },
        {
          label: '80A',
          value: '80A'
        }
      ],
      colors: [
        {
          bg: 'black.svg',
          color: 'black',
          active: true
        },
        {
          bg: 'pink.svg',
          color: 'pink',
          active: false
        },
        {
          bg: 'white.svg',
          color: 'white',
          active: false
        }
      ]
    }
  }
}
</script>
