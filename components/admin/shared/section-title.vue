<template>
  <component
    class="section-title-a"
    :class="tag ? `section-title-a--${tag}` : ''"
    :is="isTag">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AdminSectionTitle',
  props: {
    tag: {
      type: Number
    }
  },
  computed: {
    isTag () {
      switch (this.tag) {
        case 2:
          return 'h2'
          break
        default:
          return 'h1'
          break
      }
    }
  }
}
</script>
