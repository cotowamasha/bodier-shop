<template>
  <div class="card container">
    <section-title>
      <span class="path">
        Главная &nbsp;&nbsp;/&nbsp;&nbsp; Каталог &nbsp;&nbsp;/&nbsp;&nbsp; Класика &nbsp;&nbsp;/&nbsp;&nbsp; Бюстгальтер 2829 BRIGHT WAVE
      </span>
    </section-title>
    <div class="card-top">
      <CardImgs />
      <TopInfo
        :stars="stars"
        :rating="rating"
      />
    </div>
    <div class="card-bottom">
      <div class="card-bottom--menu">
        <div class="card-menu">
          <p
            v-for="(item, i) of menu"
            :key="i"
            :class="{'active': itemComp === i}"
            @click="itemComp = i"
          >
            {{ item.name }} {{ item.feedbacks }}
          </p>
        </div>
        <div class="line" />
        <component :is="about[itemComp]" />
      </div>
      <div class="card-bottom--rating">
        <RatingTop
          :stars="stars"
          :rating="rating"
        />
        <div class="line" />
        <RatingBottom />
      </div>
    </div>
    <div class="card-another">
      <section-title>
        Похожие товары
      </section-title>
      <div class="card-another--goods">
        <Good
          v-for="(good, i) of items"
          :key="i"
          :good="good"
        />
      </div>
    </div>
  </div>
</template>

<script>
import About from './about'
import Specifications from './specifications'
import Delivery from './delivery'
import Pay from './pay'
import Feedbacks from './feedbacks'
import SectionTitle from '~/components/shared/section-title'
import CardImgs from '~/components/page-parts/card-item/imgs/index'
import TopInfo from '~/components/page-parts/card-item/info-top/index'
import RatingTop from '~/components/page-parts/card-item/info-bottom/rating-top'
import RatingBottom from '~/components/page-parts/card-item/info-bottom/rating-bottom'
import Good from '~/components/shared/good'

export default {
  name: 'CartItemPage',
  components: {
    Good,
    RatingBottom,
    RatingTop,
    TopInfo,
    CardImgs,
    SectionTitle
  },
  data () {
    return {
      about: [About, Specifications, Delivery, Pay, Feedbacks],
      itemComp: 0,
      rating: 4.9,
      stars: [],
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
      ],
      menu: [
        {
          link: '/card-item',
          name: 'О товаре'
        },
        {
          link: '/card-item',
          name: 'Характеристики'
        },
        {
          link: '/card-item',
          name: 'Доставка'
        },
        {
          link: '/card-item',
          name: 'Оплата'
        },
        {
          link: '/card-item',
          name: 'Отзывы',
          feedbacks: 12
        }
      ]
    }
  },
  mounted () {
    this.isStars()
  },
  methods: {
    isStars () {
      if (this.rating > 4.5) {
        this.stars = ['rating2', 'rating2', 'rating2', 'rating2', 'rating2']
      }
      if (this.rating < 4.5 && this.rating > 3.5) {
        this.stars = ['rating2', 'rating2', 'rating2', 'rating2', 'rating']
      }
      if (this.rating < 3.5 && this.rating > 2.5) {
        this.stars = ['rating2', 'rating2', 'rating2', 'rating', 'rating']
      }
      if (this.rating < 2.5 && this.rating > 1.5) {
        this.stars = ['rating2', 'rating2', 'rating', 'rating', 'rating']
      }
      if (this.rating < 1.5 && this.rating > 0.5) {
        this.stars = ['rating2', 'rating', 'rating', 'rating', 'rating']
      }
      if (this.rating < 0.5) {
        this.stars = ['rating', 'rating', 'rating', 'rating', 'rating']
      }
    }
  }
}
</script>
