<template>
    <main>
        <div class="left">
            <News />
            <h1 class="title">
                <span>KW</span>
                <span>O</span>
                <span>N'S</span>
                <br>FAMILY
            </h1>
        </div>
        <div class="right">
            <figure>
                <div class="img1">
                    <iframe src="https://www.youtube.com/embed/xEl_Hgx7JFA?si=g1CgHd6Nblyyvs7d"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="img2">
                    <a
                        @click.prevent="
                            img_url=hotest_news[0].img_url;
                            isModal=true;title=hotest_news[0].title;
                            content=hotest_news[0].content"
                            href="#"
                    >
                        <img :src="hotest_news[0].img_url" alt="2"/>
                    </a>
                    <a
                        @click.prevent="
                            img_url=hotest_news[1].img_url;
                            isModal=true;title=hotest_news[1].title;
                            content=hotest_news[1].content"
                            href="#"
                    >
                        <img :src="hotest_news[1].img_url" alt="2"/>
                    </a>
                </div>
            </figure>
        </div>
    </main>

    <Modal v-if="isModal">
        <figure>
            <img :src="img_url" alt="Modal Image" />
            <div class="text">
                <h4 style="font-weight: bold;">{{ title }}</h4>
                <p>{{ content }}</p>
            </div>
        </figure>
        <button style="position:absolute; right:20px; top: 20px;" @click="isModal = false">
            <Icon icon="material-symbols:close" width="32" height="32" style="color: fff" />
        </button>
    </Modal>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
// import { newsData, hotestNewsData } from '../assets/newsData';
import { hotestNewsData } from '../assets/newsData';
import News from '../components/News.vue'
import Modal from '../components/Modal.vue';
import { Icon } from '@iconify/vue';

// const news = ref(newsData)
const hotest_news = ref(hotestNewsData);
const isModal = ref(false);
const img_url = ref('');

</script>

<style scoped lang="scss">
button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
}

h1 {
    font-family: "Cabin Sketch", sans-serif;
    font-weight: 700;
    font-style: normal;
}

@media screen and (min-width: 768px) {
    main {
        padding-top: 50px;
        display: flex;
        height: calc(100vh - 50px);

        .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 30px;
        }

        .right {
            position: relative;

            .img1 {
                padding-top: 60px;
                padding-bottom: 30px;
                display: flex;
                text-align: right;
                justify-content: flex-end;

                iframe {
                    width: calc(100% - 36px);
                    aspect-ratio: 16/9;
                }
            }

            .img2 img {
                width: 20vw;
                // outline: 1px solid #333;
            }

            .img2 {
                a:nth-child(1) {
                    padding-left: 7vw;
                }
            }

            .img2 {
                a:nth-child(2) {
                    // max-height: 45vh;
                    position: fixed;
                    right: 0;
                    bottom: 0;
                }
            }
        }
    }

    .title {
        font-size: clamp(1rem, 12vw, 11rem);
        line-height: 1;

        span:nth-child(2) {
            display: inline-block;
            border-radius: 50%;
            color: var(--main-color);
        }
    }

}


@media screen and (max-width: 768px) {
    main {
        display: block;
        padding-top: 50px;
        height: calc(100vh - 50px);

        .left {
            display: flex;
            flex-direction: column-reverse;
            padding: 30px 15px;
            margin-bottom: 0px;
            // background: pink;
        }

        .right {
            position: relative;

            .img1 {
                padding-bottom: 30px;

                iframe {
                    width: calc(100%);
                    aspect-ratio: 16/9;
                }
            }

            .img2 {
                display: flex;

                a {
                    width: 50%;
                    aspect-ratio: 1/2;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    .title {
        font-size: clamp(1rem, 20vw, 6rem);
        line-height: 1;

        span:nth-child(2) {
            display: inline-block;
            border-radius: 50%;
            color: var(--main-color);
        }

    }
}
</style>