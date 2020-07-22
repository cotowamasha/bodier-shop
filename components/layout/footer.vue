<template>
  <footer class="footer">
    <div class="footer__nav container">
      <div class="footer__nav-left">
        <Logo />
        <div
          v-for="(item, i) of nav"
          :key="i"
          class="footer__line"
        >
          {{ item.name }}
          <div class="line" />
          <Menu
            :menu="item.links"
            class-name="footer"
          />
        </div>
        <div class="footer__line">
          {{ media.name }}
          <div class="line" />
          <div class="footer__media">
            <n-link
              v-for="(link, i) of media.links"
              :key="i"
              :to="link.to"
            >
              <img :src="`/svg/${link.name}.svg`">
            </n-link>
          </div>
        </div>
      </div>
      <v-btn
        class="btn-grey footer__to-start"
      >
        <img src="/svg/arr-top.svg">
        В начало
      </v-btn>
    </div>
    <div class="footer__rules">
      <div class="container footer__rules-flex">
        <div class="footer__rules-left">
          Создание и поддержка сайта
          <n-link to="/">
            Webperfom
          </n-link>
        </div>
        <div class="footer__rules-left">
          Bodier / Все права защищены 2020
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/shared/logo'
import Menu from '~/components/shared/menu'

export default {
  name: 'Footer',
  components: {
    Menu,
    Logo
  },
  data () {
    return {
      nav: [
        {
          name: 'Категории',
          links: [
            {
              to: '/catalog/classic',
              name: 'Класика'
            },
            {
              to: '/catalog/uniform',
              name: 'Униформы'
            },
            {
              to: '/catalog/dress',
              name: 'Платья'
            }
          ]
        },
        {
          name: 'Основное',
          links: [
            {
              to: '/catalog/classic',
              name: 'Каталог'
            },
            {
              to: '/blog',
              name: 'Блог'
            },
            {
              to: '/about',
              name: 'О нас'
            },
            {
              to: '/contacts',
              name: 'Контакты'
            }
          ]
        }
      ],
      media: {
        name: 'Мы в сетях',
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
            name: 'inst'
          }
        ]
      }
    }
  }
}
</script>
