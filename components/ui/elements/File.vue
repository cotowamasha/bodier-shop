<template>
  <div class="fl_upload">
    <label :for="id">

      <span>

        <slot name="icon" />

      </span>

      <input
        :id="id"
        class="fl_inp pick-file"
        type="file"
        :accept="accept"
        :multiple="multiple"
        @change="change"
      >

      <img
        v-show="preview"
        :src="preview"
        alt=""
      >

    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    accept: {
      type: String,
      default: '.jpg,.jpeg,.png'
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      preview: null
    }
  },
  methods: {
    change (e) {
      const file = e.target.files[0]

      const img = new Image()
      img.onload = (e) => {
        this.preview = e.target.src
      }

      img.src = URL.createObjectURL(file)
      URL.revokeObjectURL(file)

      this.$emit('change-file', file)
    }
  }
}
</script>

<style lang="css">
</style>
