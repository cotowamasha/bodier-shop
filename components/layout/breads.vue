<template>
  <div class="breads" />
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    breads: {
      type: Array,
      default: (data) => {
        return []
      }
    }
  },
  computed: {
    items() {
      const breads = [
        {
          name: 'Главная',
          link: '/'
        }
      ]
      return breads.concat(this.breads)
    }
  }
}
</script>
