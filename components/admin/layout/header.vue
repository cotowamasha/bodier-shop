<template>
  <header class="header-a">
    <nuxt-link
      to="/adminka"
      class="header-a__logo">
      Bodier
    </nuxt-link>

    <div
      class="header-a__user"
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
      @click="isShow = !isShow"
    >
      <div class="header-a__user-icon">
        <svg-icon
          name="user"
        />
      </div>
      <transition
        appear
        name="slide-top"
        mode="out-in">
        <div
          v-if="isShow"
          class="header-a__dropdown"
        >
          <nuxt-link
            to="/adminka/settings"
            class="header-a__dropdown-item"
          >
            Настройки
          </nuxt-link>
          <a
            href="/logout"
            class="header-a__dropdown-item"
            @click.prevent="logout()"
          >
            Выход
          </a>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AdminHeader',
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    logout() {

    }
  }
}
</script>

<style lang="css">
</style>
