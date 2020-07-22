<template>
  <div class="pagination">
    <v-btn
      class="btn-1"
    >
      <img src="/svg/arr-left.svg">
    </v-btn>
    <div class="pages">
      <v-btn
        class="page active"
      >
        1
      </v-btn>
      <v-btn
        class="page"
      >
        2
      </v-btn>
      <v-btn
        class="page"
      >
        3
      </v-btn>
      <v-btn
        class="page"
      >
        4
      </v-btn>
      <v-btn
        class="page"
      >
        5
      </v-btn>
    </div>
    <v-btn
      class="btn-2"
    >
      <img src="/svg/arr-right.svg">
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>
