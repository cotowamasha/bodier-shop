<template>
  <div class="contacts">
    <div class="container">
      <div class="path">
        <n-link
          to="/"
          class="path__link"
        >
          Главная&nbsp;&nbsp;
        </n-link>
        /&nbsp;&nbsp;Контакты
      </div>
      <section-title class="contacts__title">
        Контакты
      </section-title>
      <div class="contacts__content">
        <div class="contacts__content-1">
          <div class="contacts__media">
            <n-link
              v-for="(link, i) of links"
              :key="i"
              :to="link.to"
            >
              <img :src="`/svg/${link.name}.svg`">
            </n-link>
          </div>
          <form class="contacts__form">
            <div class="contacts__form-line">
              <v-input
                holder="Имя*"
              />
              <v-input
                holder="E - Mail*"
              />
            </div>
            <div class="contacts__message">
              <v-input
                holder="Сообщение"
              />
            </div>
            <div class="contacts__form-submit">
              <v-btn
                class="btn-medium btn-grey--light btn--center"
              >
                Отправить
              </v-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/shared/section-title'

export default {
  name: 'ContactsPage',
  components: {
    SectionTitle
  },
  data () {
    return {
      links: [
        {
          to: 'https://vk.com/',
          name: 'vk'
        },
        {
          to: 'https://web.telegram.org/',
          name: 'tg'
        },
        {
          to: 'https://twitter.com/',
          name: 'tw'
        },
        {
          to: 'https://www.instagram.com/',
          name: 'inst-w'
        }
      ]
    }
  }
}
</script>
