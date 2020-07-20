<template>
  <div class="admin">
    <Header />

    <div class="admin__wrap">
      <Sidebar />
      
      <div class="admin__content">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/admin/layout/header'
import Sidebar from '~/components/admin/layout/sidebar'

export default {
  name: 'Admin',
  components: {
    Header,
    Sidebar
  }
}
</script>
