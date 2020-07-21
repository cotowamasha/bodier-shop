<template>
  <div class="popular container">
    <section-title>
      Новые товары
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
  name: 'New',
  components: {
    Good,
    SectionTitle
  },
  data () {
    return {
      items: [
        {
          img: 'good5.png',
          price: '1150',
          rating: '4.9',
          title: 'Сексуальная шелковая ночнушка'
        },
        {
          img: 'good6.png',
          price: '1150',
          old_price: '1850',
          rating: '4.9',
          title: 'Сексуальная шелковая ночнушка'
        },
        {
          img: 'good7.png',
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
