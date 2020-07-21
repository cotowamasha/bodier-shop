<template>
  <div class="info">
    <div class="container">
      <div
        v-for="(item, i) of info"
        :key="i"
        class="info__item"
      >
        <img :src="`/svg/${item.icon}`">
        <div class="info__content">
          {{ item.title }}
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      info: [
        {
          icon: 'coupon.svg',
          title: 'Скидка постоянным клиентам',
          content: 'Бесплатная доставка по Росси и странам СНГ'
        },
        {
          icon: 'logistic.svg',
          title: 'Бесплатная доставка',
          content: 'Бесплатная доставка по Росси и странам СНГ'
        },
        {
          icon: 'chat.svg',
          title: '24/7 Онлайн поддержка',
          content: 'Бесплатная доставка по Росси и странам СНГ'
        }
      ]
    }
  }
}
</script>
