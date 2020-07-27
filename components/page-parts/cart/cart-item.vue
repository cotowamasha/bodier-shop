<template>
  <div class="cart__item">
    <n-link
      to="/card-item"
    >
      <img
        :src="`/img/goods/${item.img}`"
        class="cart__item--img"
      >
    </n-link>
    <p class="cart__item--name">
      {{ item.name }} / {{ item.type }}
    </p>
    <div class="cart__item-line">
      <div class="cart__item--select">
        <v-select
          v-model="selectedColor"
          :options="item.all_colors"
        />
      </div>
      <div class="cart__item--select-size">
        <v-select
          v-model="selectedSize"
          :options="item.all_sizes"
        />
      </div>
      <div class="cart__item--count">
        <v-btn
          :disabled="item.count === 1"
          class="btn-grey"
          @click="$emit('decrease', index)"
        >
          -
        </v-btn>
        {{ item.count }}
        <v-btn
          :disabled="item.count === 6"
          class="btn-grey"
          @click="$emit('increase', index)"
        >
          +
        </v-btn>
      </div>
      <div class="cart__item--price">
        {{ item.price * item.count }}p
      </div>
      <div class="cart__item--remove">
        <v-btn
          @click="$emit('remove', index)"
        >
          <img src="/svg/remove.svg">
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      selectedColor: this.item.color,
      selectedSize: this.item.size
    }
  }
}
</script>
