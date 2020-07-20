<template>
  <div
    class="f-input inpt"
    :class="{ 'inpt--error' : error && error.status }"
  >
    <slot name="icon" />
    <input
      :id="id"
      :class="[classEl, 'inpt__input']"
      :type="type"
      :placeholder="holder"
      :value="value"
      v-model.trim="name"
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
    id: String,
    type: String,
    classEl: String,
    holder: String,
    value: String,
    error: Object
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
