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
        @change="$emit('change-check', $event.target.checked)"
      >

      <span
        :style="{background: `url('/svg/${bg}')`}"
        :class="['chckbox__box', color !== '' ? `chckbox__box--${color}` : 'chckbox__box']"
      />

      <span
        :class="['chckbox__text', {'chckbox__text-active': name}]"
      >
        <slot />
      </span>
    </label>

    <span
      v-if="error && error.status"
      class="chckbox__error"
    >
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
    bg: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
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
