<template>
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.modal {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: calc(100vh - 50px);
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  color: #fff;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .modal {
    :deep(img) {
      width: 50%;
      height: 100%;
      object-fit: contain;
    }
  }
}

@media screen and (max-width: 767px) {
  .modal {
    :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>