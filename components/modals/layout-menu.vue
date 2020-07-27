<template>
  <div>
    <transition
      name="fade"
      appear
      mode="out-in"
    >
      <div
        v-if="bg"
        class="modal-window__bg"
      />
    </transition>

    <transition
      name="slide-right"
      appear
      mode="out-in"
    >
      <div
        v-if="box"
        class="modal-window__wrap"
      >
        <div
          @mousedown.self="$emit('close')"
          class="modal-window__container modal-window__container-menu"
        >
          <div
            @mousedown.self="$emit('close')"
            class="modal-window__content"
          >
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LayoutMenu',
  props: {
    bg: {
      type: Boolean,
      default: false
    },
    box: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    bg (data) {
      if (data) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  }
}
</script>
