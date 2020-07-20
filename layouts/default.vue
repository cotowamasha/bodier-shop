<template>
  <div>
    <Header />

    <div
      class="wrapper">

      <nuxt />

    </div>

    <Footer />

    <SignIn />

  </div>
</template>

<script>
import Header from '~/components/layout/header'
import Footer from '~/components/layout/footer'

import SignIn from '~/components/modals/sign-in'

export default {
  components: {
    Header,
    Footer,
    SignIn
  }
}
</script>

<style>
</style>
