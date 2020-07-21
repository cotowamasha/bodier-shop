<template>
  <div class="index">
    <Promo />
    <Categories />
    <Popular />
    <New />
    <Info />
  </div>
</template>

<script>
import Promo from '~/components/page-parts/index/promo/index'
import Categories from '~/components/page-parts/index/categories/index'
import Info from '~/components/page-parts/index/info/index'
import Popular from '~/components/page-parts/index/popular/index'
import New from '~/components/page-parts/index/new/index'

export default {
  name: 'PageIndex',
  components: {
    New,
    Popular,
    Info,
    Categories,
    Promo
  }
}
</script>
