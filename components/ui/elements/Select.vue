<template>
  <div
    class="slct"
    :class="[{ 'slct--error' : error && error.status }, { 'active' : isOpen }]"
    @click="toggleDrop"
  >
    <div
      ref="selectInput"
      class="slct__select"
    >
      <span
        class="slct__holder"
      >
        {{ holder && !value ? holder : value }}
      </span>

      <div class="slct__wrap">
        <div class="slct__box">
          <div class="slct__list">
            <div
              v-for="(item, i) in array"
              :key="i"
              class="slct__item"
              @click="$emit('change-select', item)"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <div class="slct__arrow">
        <svg-icon
          name="select-arrow"
          width="24"
          height="24"
        />
      </div>
    </div>

    <span
      v-if="error && error.status"
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
    error: {
      type: Object,
      default: () => { return {} }
    },
    value: {
      type: String,
      required: true
    },
    holder: {
      type: String,
      default: ''
    },
    array: {
      type: [Object, Array],
      default: () => { return {} }
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDrop (e) {
      this.isOpen = !this.isOpen
      const el = e.target.classList.contains('slct') ? e.target : this.$funcs.findParent(e.target, 'slct')
      const box = el.children[0].children

      let child = ''
      Array.from(box).forEach((item) => {
        if (item.classList.contains('slct__wrap')) {
          child = item.children[0]
        }
      })
      if (this.isOpen) {
        const scrollHeight = child.scrollHeight
        child.style.height = `${scrollHeight}px`
      } else {
        child.style.height = ``
      }
    }
  }
}
</script>

<style lang="css">
</style>
