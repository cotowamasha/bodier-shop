<template>
  <div class="categories container">
    <section-title>
      Категории <span>Выберите свой вариант нижнего белья</span>
    </section-title>
    <section class="categories__links">
      <div class="categories-left">
        <n-link
          to="/catalog"
          class="categories-1"
        >
          <p>Платья</p>
        </n-link>
        <n-link
          to="/catalog"
          class="categories-2"
        >
          <p>Униформы</p>
        </n-link>
      </div>
      <n-link
        to="/catalog"
        class="categories-3"
      >
        <p>Класика</p>
      </n-link>
    </section>
  </div>
</template>

<script>
import SectionTitle from '~/components/shared/section-title'

export default {
  name: 'Categories',
  components: {
    SectionTitle
  }
}
</script>
