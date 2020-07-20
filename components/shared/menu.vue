<template>
  <nav
    :class="['menu', `menu-${className}`]"
  >
    <n-link
      v-for="(item, i) of menu"
      :key="i"
      :to="item.to"
      class="menu__link"
    >
      {{ item.name }}
    </n-link>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menu: {
      type: Array,
      default: () => ([])
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
