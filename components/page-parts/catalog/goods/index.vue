<template>
  <div class="catalog-goods">
    <section-title>
      Каталог
    </section-title>
    <div class="goods">
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
  name: 'CatalogGoods',
  components: {
    Good,
    SectionTitle
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
