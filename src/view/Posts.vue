<template>
  <main class="container">
    <h2>Posts</h2>
    <ul class="posts">
      <li v-for="(post, i) in news" :key="i">
        <router-link :to="`/detail/${i}`">
          <img :src="post.img_url" alt="photo" />
        </router-link>
      </li>
    </ul>
  </main>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue';
import { newsData, movieData } from '../assets/newsData';

const news = ref(newsData);

// news 내림차순
news.value.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});
</script>
  
<style scoped lang="scss">
  .container {
    padding-top: 90px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .posts {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    li {
      flex-basis: calc(50% - 5px);
      aspect-ratio: 1/1;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>