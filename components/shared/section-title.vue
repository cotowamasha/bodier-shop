<template>
  <component
    :is="isTag"
    class="section-title"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    tag: {
      type: String,
      default: 'h2'
    }
  },
  computed: {
    isTag () {
      return this.tag
    }
  }
}
</script>
