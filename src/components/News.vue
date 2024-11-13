<template>
  <div class="news-container">
    <h2>Latest News</h2>
    <ul class="news">
      <li v-for="(news, i) in newsData.reverse()" :key="i">
        <a :href="news.img_url" target="_blank" @click.prevent="showModal(news)">
          <h4>{{ news.title }}</h4>
          <time>{{ news.date }}</time>
        </a>
      </li>
    </ul>
  </div>

  <Modal v-if="isModal">
    <figure>
      <img :src="img_url" alt="Modal Image">
      <div class="text" style="padding: 0.5em 1em;">
        <h4 style="font-weight: bold; margin-bottom: 4px;">{{ title }}</h4>
        <p>{{ content }}</p>
      </div>
    </figure>
    <button style="position:absolute; right:20px; top: 20px;" @click="isModal = false">
      <Icon icon="material-symbols:close" width="32" height="32"  style="color: fff" />
    </button>
  </Modal>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { newsData } from '../assets/newsData';
import Modal from '../components/Modal.vue';
import { Icon } from '@iconify/vue';

const isModal = ref(false);
const news = ref(newsData);
const img_url = ref('');
const title = ref('');
const content = ref('');
console.log(news.value);

const showModal = (news) => {
  isModal.value = true;
  img_url.value = news.img_url;
  title.value = news.title;
  content.value = news.content;
}

</script>

<style lang="scss" scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
}

time {
  font-size: 14px;
  color: #777;
}


@media (min-width: 768px) {
  .news-container {
    padding-top: 40px;
  }

  h2,
  h4 {
    font-size: 16px;
  }

  h4 {
    font-weight: 400;
  }

  ul {
    max-width: 400px;
    list-style-type: none;

    li>a {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid;
      padding: 8px 0;
    }

    margin-top: 8px;
  }

}

@media (max-width: 768px) {
  .news-container {
    padding-top: 40px;
  }

  h2,
  h4 {
    font-size: 16px;
  }

  h4 {
    font-weight: 400;
  }

  ul {
    max-width: 100%;
    list-style-type: none;

    li>a {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid;
      padding: 8px 0;
    }

    margin-top: 8px;
  }

}
</style>