<template>
  <div class="card-imgs">
    <div class="card-imgs--small">
      <img
        v-for="(img, i) of imgs"
        :key="i"
        :src="`/img/card-item/${img.img}`"
        :class="['img--small', {'active-img': img.active}]"
        @click="activeImg(i)"
      >
    </div>
    <div class="card-imgs--big">
      <img
        :src="`/img/card-item/${isActive()}`"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardImgs',
  data () {
    return {
      imgs: [
        {
          img: 'img1.png',
          active: true
        },
        {
          img: 'img2.png',
          active: false
        },
        {
          img: 'img3.png',
          active: false
        },
        {
          img: 'img4.png',
          active: false
        }
      ]
    }
  },
  computed: {},
  mounted () {
    this.isActive()
  },
  methods: {
    activeImg (i) {
      this.imgs.forEach(el => (el.active = false))
      this.imgs[i].active = true
      this.isActive()
    },
    isActive () {
      for (let i = 0; i < this.imgs.length; i++) {
        if (this.imgs[i].active) {
          return this.imgs[i].img
        }
      }
    }
  }
}
</script>
