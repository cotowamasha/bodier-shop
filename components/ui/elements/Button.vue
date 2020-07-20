<template>
  <button
    class="btn"
    @click.prevent="$emit('click')"
    :disabled="disabled"
  >
    <span v-if="loading">
      <spinner :size="24" />
    </span>
    <slot
      v-else
    />
  </button>
</template>

<script>
import Spinner from './Spinner'

export default {
  components: {
    Spinner
  },
  props: {
    disabled: Boolean,
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="css">
</style>
