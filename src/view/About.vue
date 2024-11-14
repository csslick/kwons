<template>
    <main class="container">
        <!-- <h1>About</h1> -->
        <figure class="mom_draw_me">
            <img src="/images/mom_draw_me2_2024_11_13.jpg" alt="mom draw me">
        </figure>
        <article>
            <h2 class="kwon">權가네 추억 공간</h2>
            <p>공사중입니다...</p>
        </article>
    </main>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
    .container {
        display: flex;
        justify-content: space-between;
        // align-items: center;
        figure, article {
            flex: 1;
            // border: 1px solid red;
            padding: 1em;
        }
        figure {
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    .mom_draw_me {
        width: 100%;
        height: 100%;
        object-fit: contain;
        img {
            width: 50%;
        }
    }
}

@media screen and (max-width: 767px) {
    .mom_draw_me {
        width: 100%;
        height: 100%;
        object-fit: contain;
        img {
            width: 100%;
        }
    }
}

.container {
    padding-top: 90px;
    padding-left: 30px;
}

.kwon{ font-weight: normal;}
.kwon::first-letter {
    font-size: 3rem;
    font-family: serif;
}
</style>