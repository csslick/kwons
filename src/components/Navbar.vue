<template>
  <header>
    <div class="header-container">
      <nav>
        <router-link to="/">Home</router-link>
        <!-- <router-link to="/about">About</router-link> -->
      </nav>
      <button @click="toggleMenu">
        <Icon icon="ri:menu-3-line" width="24" height="24"  style="color: 4b3c30" />
      </button>
    </div>
  </header>

  <div class="toggle-menu" v-if="isMenuOpen">
    <ul>
      <li><router-link to="/" @click="isMenuOpen=false">Home</router-link></li>
      <li><router-link to="/about" @click="isMenuOpen=false">About</router-link></li>
    </ul>
    <button @click="isMenuOpen=false">
      <Icon icon="material-symbols:close" width="32" height="32"  style="color: 4b3c30" />
    </button>
  </div>
</template>
  
<script setup lang='ts'>
  import { Icon } from '@iconify/vue';
  import { ref } from 'vue';

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

</script>
  
<style scoped lang="scss">
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: none;
    color: var(--text-color);
  }

  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid var(--text-color);
    padding: 0 30px;
    background: #fff;

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1440px;
      height: 100%;
      margin: 0 auto;
    } 
  }

  a {
    margin-right: 2rem;
  }

  .toggle-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    font-size: 3em;

    button {
      position: absolute;
      right: 50px;
      top: 50px;
    }
  }
  
  @media screen and (max-width: 768px) {
    header {
      position: fixed;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid var(--text-color);
      padding: 0 20px;

      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1440px;
        height: 100%;
        margin: 0 auto;
      } 
    }

  }
</style>