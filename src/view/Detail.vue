<template>
    <main class="container">
      <header>
        <h2>{{ newsData[id].title }}</h2>
        <time>{{ newsData[0].date }}</time>
      </header>
      <figure>
        <img :src="newsData[id].img_url" alt="">
        <figcaption>
          <span>{{ newsData[id].content }}</span><br>
          <router-link to="/posts" class="btn-back">돌아가기</router-link>
        </figcaption>
      </figure>
    </main>
</template>
  
<script setup lang='ts'>
  import { useRoute } from 'vue-router';
  import { newsData, movieData } from '../assets/newsData';

  const route = useRoute();
  const id:number = Number(route.params.id);
  console.log(route.params.id)
</script> 
  
<style scoped lang="scss">
.btn-back {
  margin-top: 1em;
  text-decoration: underline;
}

main.container {
  position: relative;
  padding-top: 90px;
  padding-bottom: 120px;
  padding-left: 30px;
  max-width: 1000px;
  height: calc(100vh - 50px);
}

main header {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

figure {
  height: 100%;
  /* border: 2px solid red; */
  // background: pink;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

h2 {
  margin-bottom: 6px;
}

time {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  display: inline-block;
}
</style>