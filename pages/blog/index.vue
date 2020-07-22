<template>
  <div class="blog container">
    <section-title>
      <span class="path">
        Главная &nbsp;&nbsp;/&nbsp;&nbsp; Блог
      </span>
    </section-title>
    <section-title>
      Блог
    </section-title>
    <News :news="news" />
  </div>
</template>

<script>
import SectionTitle from '~/components/shared/section-title'
import News from '~/components/page-parts/blog/news/index'

export default {
  name: 'BlogPage',
  components: {
    News,
    SectionTitle
  },
  data () {
    return {
      news: [
        {
          img: 'blog1.png',
          title: 'Wildberries расширил аудиторию покупателей',
          content: 'За апрель и половину мая количество \n' +
            'покупателей BODIERувеличилось в 2,3 раза \n' +
            'по сравнению с аналогичным периодом \n' +
            'прошлого года. Как полагают в компании, \n' +
            'аудитория выросла за счет новых покупателей...\n',
          date: '29 июня 2020',
          last_news: true
        },
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
        },
        {
          img: 'blog5.png',
          title: 'Wildberries расширил аудиторию покупателей в апреле и мае',
          content: 'За апрель и половину мая количество \n' +
            'покупателей BODIERувеличилось в 2,3 раза \n' +
            'по сравнению с аналогичным периодом \n' +
            'прошлого года. Как полагают в компании...\n',
          date: '29 июня 2020'
        },
        {
          img: 'blog6.png',
          title: 'Фокус на главном',
          content: 'В новом медиа Фокус отвечаем на самые \n' +
            'жизненные вопросы и рассказываем о темах, \n' +
            'которые активно обсуждаются ВКонтакте.',
          date: '29 июня 2020'
        }
      ]
    }
  }
}
</script>
