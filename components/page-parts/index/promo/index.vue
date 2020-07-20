<template>
  <div class="promo">
    <client-only>
      <swiper
        :options="swiperOption"
        class="swiper promo__swiper"
      >
        <swiper-slide
          v-for="(slide, i) of slides"
          :key="i"
          class="promo__item"
        >
          <div class="promo__text container">
            {{ slide.text1 }}
            <span>{{ slide.text2 }}</span>
          </div>
        </swiper-slide>
        <div
          slot="pagination"
          class="promo__pagination"
        />
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Promo',
  data () {
    return {
      slides: [
        {
          text1: 'Эксклюзивная коллекция',
          text2: 'Нижнего белья'
        },
        {
          text1: 'Эксклюзивная коллекция',
          text2: 'Нижнего белья'
        },
        {
          text1: 'Эксклюзивная коллекция',
          text2: 'Нижнего белья'
        },
        {
          text1: 'Эксклюзивная коллекция',
          text2: 'Нижнего белья'
        }
      ],
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.promo__pagination'
        }
      }
    }
  }
}
</script>
