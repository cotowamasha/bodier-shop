<template>
  <div class="news">
    <div
      v-for="(post, i) of news"
      :key="i"
      :class="[post.last_news ?'last-news' : 'old-news']"
    >
      <n-link to="/blog/post">
        <img :src="`/img/blog/${post.img}`">
      </n-link>
      <div class="content">
        <div class="title">
          {{ post.title }}
        </div>
        <p>
          {{ post.content }}
        </p>
        <span>{{ post.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: {
    news: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
