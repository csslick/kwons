<template>
    <div class="container">
        <h1>About</h1>
        <p class="kwon">權가네 추억 공간</p>
        <figure class="mom_draw_me">
            <img src="/images/mom_draw_me2_2024_11_13.jpg" alt="mom draw me">
        </figure>
        <p>공사중입니다...</p>
    </div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
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

.kwon::first-letter {
    font-size: 4rem;
    font-weight: 700;
    font-weight: normal;
}
</style>