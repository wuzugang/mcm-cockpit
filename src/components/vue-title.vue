<template>
      <div class="container_title">
        <span class="container_title_text">
           <slot name="text"></slot>
        </span>
      </div>
</template>

<script>
    export default {
        name: "vue-title"
    }
</script>

<style scoped lang="less">
.container_title{
  height: 7%;
  background-color: #00629E;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container_title_text{
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
  }
}

</style>
