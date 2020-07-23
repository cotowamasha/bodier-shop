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
  </div>
</template>

<script>
import Header from '~/components/layout/header'
import Footer from '~/components/layout/footer'
import AuthBlock from '~/components/modals/auth'

export default {
  components: {
    AuthBlock,
    Header,
    Footer
  }
}
</script>
