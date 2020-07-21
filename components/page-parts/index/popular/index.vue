<template>
  <div class="popular container">
    <section-title>
      Популярные товары
    </section-title>
    <div class="popular__items">
      <good
        v-for="(good, i) of items"
        :key="i"
        :good="good"
      />
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/shared/section-title'
import Good from '~/components/shared/good'

export default {
  name: 'Popular',
  components: {
    Good,
    SectionTitle
  },
  data () {
    return {
      items: [
        {
          img: 'good1.png',
          price: '1150',
          rating: '4.9',
          title: 'Сексуальная шелковая ночнушка'
        },
        {
          img: 'good2.png',
          price: '1150',
          old_price: '1850',
          rating: '4.9',
          title: 'Сексуальная шелковая ночнушка'
        },
        {
          img: 'good3.png',
          price: '1150',
          rating: '4.9',
          title: 'Сексуальная шелковая ночнушка'
        },
        {
          img: 'good4.png',
          price: '1150',
          old_price: '1850',
          rating: '4.9',
          title: 'Сексуальная шелковая ночнушка'
        }
      ]
    }
  }
}
</script>
