<template>
  <div
    class="f-input inpt"
    :class="{ 'inpt--error' : error && error.status }"
  >
    <slot name="icon" />
    <input
      :id="id"
      v-model.trim="name"
      :class="[classEl, 'inpt__input']"
      :type="type"
      :placeholder="holder"
      :value="value"
      @input="$emit('change-input', $event.target.value)"
    >
    <slot
      name="eye"
    />
    <span
      v-if="error && error.text"
      class="inpt__error"
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
      default: () => ({})
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
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
