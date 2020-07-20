<template>
  <div>
    <transition
      name="fade"
      appear
      mode="out-in"
    >
      <div
        v-if="bg"
        class="modal-window__bg" />
    </transition>

    <transition
      name="slide-top"
      appear
      mode="out-in"
    >
      <div
        v-if="box"
        class="modal-window__wrap">
        <div
          @mousedown.self="$emit('close')"
          class="modal-window__container">
          <div
            @mousedown.self="$emit('close')"
            class="modal-window__content">
            <slot/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: Boolean,
      default: false
    },
    box: Boolean
  }
}
</script>
