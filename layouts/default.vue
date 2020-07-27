<template>
  <div>
    <Header />
    <div
      class="wrapper"
    >
      <nuxt />
    </div>
    <Footer />
    <AuthBlock />
    <MenuMini />
  </div>
</template>

<script>
import Header from '~/components/layout/header'
import Footer from '~/components/layout/footer'
import AuthBlock from '~/components/modals/auth'
import MenuMini from '~/components/modals/menu-mini'

export default {
  components: {
    MenuMini,
    AuthBlock,
    Header,
    Footer
  }
}
</script>
