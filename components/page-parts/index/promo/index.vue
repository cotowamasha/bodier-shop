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
          :class="['promo__item', `promo__item--${i+1}`]"
        >
          <div :class="['promo__text', 'container', `promo__text--${slide.text_class}`]">
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
          text2: 'Нижнего белья',
          text_class: 'white'
        },
        {
          text1: 'Эксклюзивная коллекция',
          text2: 'Нижнего белья',
          text_class: 'black'
        },
        {
          text1: 'Эксклюзивная коллекция',
          text2: 'Нижнего белья',
          text_class: 'black'
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
