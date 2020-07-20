<template>
  <div
    class="chckbox"
    :class="{ 'chckbox--error' : error && error.status }"
  >
    <label
      :for="id"
      class="chckbox__label"
    >
      <input
        :id="id"
        v-model="name"
        type="checkbox"
        class="chckbox__input"
        @change="$emit('changeCheck', $event.target.checked)"
      >

      <span class="chckbox__box" />

      <span class="chckbox__text">
        <slot />
      </span>
    </label>

    <span
      v-if="error && error.status"
      class="chckbox__error">
      {{ error.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    error: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      name: this.value
    }
  },
  watch: {
    value (data) {
      this.name = data
    }
  }
}
</script>
