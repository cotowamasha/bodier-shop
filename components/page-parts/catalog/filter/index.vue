<template>
  <div class="catalog-filter">
    <div class="catalog-filter__title">
      Категории
    </div>
    <div class="catalog-filter__categories">
      <ul>
        <li
          v-for="(cat, i) of categories"
          :key="i"
          :class="{'active': cat.active}"
        >
          <n-link :to="cat.to">
            {{ cat.name }}
          </n-link>
        </li>
      </ul>
    </div>
    <div
      class="catalog-filter__title"
      @click="isShowColors = !isShowColors"
    >
      Цвет
      <v-btn class="btn-grey btn-dashed btn-small">
        Сбросить
      </v-btn>
      <img src="/svg/arr-top.svg">
    </div>
    <div
      v-show="isShowColors"
      class="catalog-filter__colors"
    >
      <v-check
        v-for="(color, i) of colors"
        :id="`${i}`"
        :key="i"
        :value="false"
        :bg="color.bg"
        :color="color.color"
      >
        {{ color.name }}
      </v-check>
    </div>
    <div
      class="catalog-filter__title"
      @click="isShowSizes = !isShowSizes"
    >
      Размер
      <v-btn class="btn-grey btn-dashed btn-small">
        Сбросить
      </v-btn>
      <img src="/svg/arr-top.svg">
    </div>
    <div
      v-show="isShowSizes"
      class="catalog-filter__sizes"
    >
      <div
        v-for="(size, i) of sizes"
        :key="i"
        class="check"
      >
        <input
          type="checkbox"
        >
        <p>
          {{ size }}
        </p>
      </div>
    </div>
    <div
      class="catalog-filter__title"
      @click="isShowPrice = !isShowPrice"
    >
      Цена
      <img src="/svg/arr-top.svg">
    </div>
    <div
      v-show="isShowPrice"
      class="catalog-filter__price"
    >
      fgh
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogFilter',
  props: {
    categories: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      isShowColors: false,
      isShowSizes: false,
      isShowPrice: false,
      colors: [
        {
          bg: 'red.svg',
          name: 'Красный',
          color: 'red'
        },
        {
          bg: 'black.svg',
          name: 'Черный',
          color: 'black'
        },
        {
          bg: 'white.svg',
          name: 'Белый',
          color: 'white'
        },
        {
          bg: 'violet.svg',
          name: 'Сиреневый',
          color: 'violet'
        },
        {
          bg: 'pink.svg',
          name: 'Розовый',
          color: 'pink'
        },
        {
          bg: 'blue.svg',
          name: 'Синий',
          color: 'blue'
        },
        {
          bg: 'beige.svg',
          name: 'Бежевый',
          color: 'beige'
        }
      ],
      sizes: ['L', '70 A', '70 B', '70 C', '70 E', '70 F', '70 G']
    }
  }
}
</script>
