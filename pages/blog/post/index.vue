<template>
  <div>
    <div class="post container">
      <div class="path">
        <n-link
          to="/"
          class="path__link"
        >
          Главная&nbsp;&nbsp;
        </n-link>
        /&nbsp;&nbsp;
        <n-link
          to="/blog"
          class="path__link"
        >
          Блог&nbsp;&nbsp;
        </n-link>
        /&nbsp;&nbsp;Wildberries расширил аудиторию покупателей
      </div>
      <img
        src="/img/blog/blog1.png"
        class="post__img"
      >
      <div class="post__content">
        <section-title>
          BODIER расширил аудиторию покупателей
        </section-title>
        <p class="post__date">
          29 июня 2020
        </p>
        <div class="post__text">
          Unity имеет растущее число функций, дружественных к художнику и дизайнеру,
          которые не требуют знаний программирования, чтобы сделатьчто-то красивое или
          веселое. Мы хотим дать возможность всем, кто работает над игрой, даже в большой
          команде, добросовестно и в реальном времени воплощать свои художественные
          замыслы. Независимо от того, являетесь ли вы художником, который никогда ранее
          не использовал Unity, или вы хотите глубоко погрузиться, чтобы максимально
          использовать возможностиUnity, мы хотим, чтобы у вас были инструменты,
          необходимые для создания великолепного контента как можно проще.
        </div>
        <img
          src="/img/blog/post1.png"
          class="post__img"
        >
        <div class="post__title">
          Представляем Unity ArtEngine для AI-Assisted Artistry
        </div>
        <div class="post__text">
          Artomatix присоединился к семье Unity! На этом занятии основатель Эрик Риссер
          и руководитель отдела продуктов Ely Leow демонстрируют мощные рабочие процессы
          создания 3D-материалов и улучшения качества жизни, доступные благодаря искусству
          искусственного интеллекта. Посмотрите, что возможно и что стоит на дорожной карте
        </div>
        <img
          src="/img/blog/post2.png"
          class="post__img"
        >
        <div class="post__title">
          Представляем Unity ArtEngine для AI-Assisted Artistry
        </div>
        <div class="post__text">
          Artomatix присоединился к семье Unity! На этом занятии основатель Эрик Риссер
          и руководитель отдела продуктов Ely Leow демонстрируют мощные рабочие процессы
          создания 3D-материалов и улучшения качества жизни, доступные благодаря искусству
          искусственного интеллекта. Посмотрите, что возможно и что стоит на дорожной карте
        </div>
        <div class="post__media">
          <div class="line" />
          <n-link
            v-for="(link, i) of media"
            :key="i"
            :to="link.to"
          >
            <img :src="`/svg/${link.name}.svg`">
          </n-link>
        </div>
      </div>
    </div>
    <div class="another">
      <div class="another__posts container">
        <section-title>
          Другие статьи
        </section-title>
        <News :news="news" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/shared/section-title'
import News from '~/components/page-parts/blog/news/index'

export default {
  name: 'PostPage',
  components: {
    News,
    SectionTitle
  },
  data () {
    return {
      media: [
        {
          to: 'https://vk.com/',
          name: 'vk'
        },
        {
          to: 'https://twitter.com/',
          name: 'tw'
        },
        {
          to: 'https://www.instagram.com/',
          name: 'inst-w'
        }
      ],
      news: [
        {
          img: 'blog2.png',
          title: 'Wildberries расширил аудиторию покупателей в апреле и мае',
          content: 'За апрель и половину мая количество \n' +
            'покупателей BODIERувеличилось в 2,3 раза \n' +
            'по сравнению с аналогичным периодом \n' +
            'прошлого года. Как полагают в компании...\n',
          date: '29 июня 2020'
        },
        {
          img: 'blog3.png',
          title: 'Фокус на главном',
          content: 'В новом медиа Фокус отвечаем на самые \n' +
            'жизненные вопросы и рассказываем о темах, \n' +
            'которые активно обсуждаются ВКонтакте.',
          date: '29 июня 2020'
        },
        {
          img: 'blog4.png',
          title: 'Wildberries расширил аудиторию',
          content: 'За апрель и половину мая количество \n' +
            'покупателей BODIERувеличилось в 2,3 раза \n' +
            'по сравнению с аналогичным периодом \n' +
            'прошлого года. Как полагают в компании...\n',
          date: '29 июня 2020'
        }
      ]
    }
  }
}
</script>
