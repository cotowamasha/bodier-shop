<template>
  <div class="sidebar-a">
    <div class="sidebar-a__nav">
      <div class="sidebar-a__header">
        Страницы
      </div>
      <nuxt-link
        v-for="(item, i) in menu"
        :key="i"
        :to="item.link"
        class="sidebar-a__link">
        - {{ item.text }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthSidebar',
  data () {
    return {
      menu: [
        {
          link: '/adminka',
          text: 'Главная'
        },
        {
          link: '/adminka/items',
          text: 'Товары'
        },
        {
          link: '/adminka/users',
          text: 'Пользователи'
        },
        {
          link: '/adminka/orders',
          text: 'Заказы'
        },
        {
          link: '/adminka/blog',
          text: 'Блог'
        }
      ]
    }
  }
}
</script>
