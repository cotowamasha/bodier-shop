<template>
  <div
    class="txtarea"
    :class="{ 'txtarea--error' : error.status }"
  >
    <slot
      name="icon" />
    <textarea
      :id="id"
      :class="classEl"
      :type="type"
      :placeholder="holder"
      v-model.trim="name"
      @input="$emit('changeInput', $event.target.value)"
      :rows="rows"
    />
    <span
      v-if="error && error.text"
      class="txtarea__error"
    >
      {{ error.text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    type: String,
    classEl: String,
    holder: String,
    value: String,
    error: {
      type: Object,
      default: () => { return {} }
    },
    rows: Number
  },
  data() {
    return {
      name: this.value ? this.value : ''
    }
  },
  watch: {
    value(data) {
      this.name = data
    }
  }
}
</script>

<style lang="css">
</style>
