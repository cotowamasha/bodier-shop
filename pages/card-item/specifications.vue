<template>
  <div class="card-specifications">
    <ul>
      <li
        v-for="(item, i) of specifications"
        :key="i"
      >
        <p class="name">
          {{ item.name }}
        </p>
        <div/>
        <div class="value">
          {{ item.value }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Specifications',
  data () {
    return {
      specifications: [
        {
          name: 'Сезон',
          value: 'На любой сезон'
        },
        {
          name: 'Материал',
          value: 'Нейлон'
        },
        {
          name: 'Состав материала',
          value: '84% Нейлон; 16% Элестан'
        },
        {
          name: 'Коллекция',
          value: 'Весна-лето 2020'
        },
        {
          name: 'Размер модели на фото',
          value: '44'
        },
        {
          name: 'Тип',
          value: 'Бюстгальтер'
        },
        {
          name: 'Цвет',
          value: 'Черный'
        },
        {
          name: 'Российский размер',
          value: '44'
        },
        {
          name: 'Пол',
          value: 'Женский'
        },
        {
          name: 'Страна-изготовитель',
          value: 'Китай'
        }
      ]
    }
  }
}
</script>
