<template>
  <div class="catalog container">
    <div class="path">
      <n-link
        to="/"
        class="path__link"
      >
        Главная
      </n-link>
      /&nbsp;&nbsp; Каталог&nbsp;&nbsp;/&nbsp;&nbsp; Платья
    </div>
    <div class="catalog-content">
      <CatalogFilter :categories="categories" />
      <CatalogGoods :items="items" />
    </div>
    <div class="catalog-pagination">
      <Pagination />
    </div>
  </div>
</template>

<script>
import CatalogGoods from '~/components/page-parts/catalog/goods/index'
import CatalogFilter from '~/components/page-parts/catalog/filter/index'
import Pagination from '~/components/shared/pagination'

export default {
  name: 'CatalogUniformPage',
  components: {
    Pagination,
    CatalogFilter,
    CatalogGoods
  },
  data () {
    return {
      categories: [
        {
          name: 'Класика',
          to: '/catalog/classic'
        },
        {
          name: 'Униформы',
          to: '/catalog/uniform'
        },
        {
          name: 'Платья',
          to: '/catalog/dress',
          active: true
        }
      ],
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
        },
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
          img: 'good5.png',
          price: '1150',
          old_price: '1850',
          rating: '4.9',
          title: 'Сексуальная шелковая ночнушка'
        },
        {
          img: 'good6.png',
          price: '1150',
          rating: '4.9',
          title: 'Сексуальная шелковая ночнушка'
        },
        {
          img: 'good7.png',
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
