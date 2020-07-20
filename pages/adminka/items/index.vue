<template>
  <div class="items-a">
    <div class="items-a__top">
      <section-title>
        Товары
      </section-title>

      <nuxt-link
        class="btn btn-add"
        to="/adminka/items/add">
        Добавить товар
      </nuxt-link>
    </div>

    <table class="items-a__table">
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Название
          </th>
          <th>
            Категория
          </th>
          <th>
            Цена
          </th>
          <th>
            Дата добавления
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in items"
          :key="i"
        >
          <td>
            {{ item.id }}
          </td>
          <td>
            <n-link
              :to="`/adminka/items/${item.id}`"
              class="items-a__link"
            >
              {{ item.name }}
            </n-link>
          </td>
          <td>
            {{ item.category.name }}
          </td>
          <td>
            {{ item.price }}
          </td>
          <td>
            {{ $dayjs(item.date_created).format('DD MMM YY HH:mm') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SectionTitle from '~/components/admin/shared/section-title'

export default {
  name: 'AdminItems',
  layout: 'admin',
  async asyncData({ store, route }) {
    const response = await store.dispatch('items/getItems')
    return { items: response.items }
  },
  components: {
    SectionTitle
  }
}
</script>
