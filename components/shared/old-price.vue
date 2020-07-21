<template>
  <div class="old-price">
    {{ price }}p
    <div class="line" />
  </div>
</template>

<script>
export default {
  name: 'OldPrice',
  props: {
    price: {
      type: String,
      default: ''
    }
  }
}
</script>
