<template>
    <main>
        <div class="left">
            <News />
            <div class="logo">
                <h1 class="title">
                    <span>KW</span>
                    <span>O</span>
                    <span>N'S</span>
                    <br>FAMILY
                </h1>
                <div v-if="isInstallBtn">
                    <button @click="handleInstallClick" class="cta">앱 설치하기</button>
                </div>
            </div>
        </div>
        <div class="right">
            <figure>
                <div class="img1">
                    <iframe :src="movie.url"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="img2">
                    <a
                        @click.prevent="
                            img_url=hotest_news[0].img_url;
                            isModal=true;
                            title=hotest_news[0].title;
                            content=hotest_news[0].content"
                            href="#"
                    >
                        <img :src="hotest_news[0].img_url" alt="2"/>
                    </a>
                    <a
                        @click.prevent="
                            img_url=hotest_news[1].img_url;
                            isModal=true;
                            title=hotest_news[1].title;
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
import { ref, onMounted } from 'vue'
// import { newsData, hotestNewsData } from '../assets/newsData';
import { hotestNewsData, movieData } from '../assets/newsData';
import News from '../components/News.vue'
import Modal from '../components/Modal.vue';
import { Icon } from '@iconify/vue';

const isInstallBtn = ref(false); // 앱 설치 버튼 활성화 여부
let deferredPrompt = null; // 모바일 설치 버튼 클릭 이벤트 핸들러

// const news = ref(newsData)
const hotest_news = ref(hotestNewsData);
const isModal = ref(false);
const img_url = ref('');

// movieData randome 선택 
const movie = ref(movieData[Math.floor(Math.random() * movieData.length)]);

onMounted(() => {
    // iOS 디바이스 감지(Mac은 지원하므로 따로 처리하지 않음)
    const isIOS = /iphone|ipad|ipod(?!.*macintosh)/.test(window.navigator.userAgent.toLowerCase());

    if (isIOS) {
        // iOS에서는 안내 메시지로 직접 추가를 유도
        alert('Safari에서 공유 버튼을 누르고 "홈 화면에 추가"로 앱을 설치할 수 있습니다.');
    } else {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault(); // 자동 설치 방지
            deferredPrompt = e; // 나중에 사용을 위해 저장
            isInstallBtn.value = true; // 설치버튼 표시
        });
    }
});

const handleInstallClick = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // 시스템 설치 창 표시
    const choiceResult = await deferredPrompt.userChoice; // 사용자 선택 감지
    if (choiceResult.outcome === 'accepted') {
      console.log('앱이 설치되었습니다.');
    } else {
      console.log('앱 설치가 취소되었습니다.');
    }
    deferredPrompt = null;  // 사용 후 이벤트 초기화
    isInstallBtn.value = false; // 설치버튼 닫음
  }
};
</script>

<style scoped lang="scss">
.cta {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

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
        padding-top: 30px;
        display: flex;
        height: calc(100vh - 50px);

        .left {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
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