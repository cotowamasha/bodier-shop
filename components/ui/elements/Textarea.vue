<template>
  <div
    class="txtarea"
    :class="{ 'txtarea--error' : error.status }"
  >
    <slot name="icon" />
    <textarea
      :id="id"
      v-model.trim="name"
      :class="classEl"
      :type="type"
      :placeholder="holder"
      :rows="rows"
      @input="$emit('change-input', $event.target.value)"
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
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    classEl: {
      type: String,
      default: ''
    },
    holder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: Object,
      default: () => { return {} }
    },
    rows: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      name: this.value ? this.value : ''
    }
  },
  watch: {
    value (data) {
      this.name = data
    }
  }
}
</script>

<style lang="css">
</style>
