<script setup lang="ts">
const titleWidth = () => `${Math.floor(40 + Math.random() * (100 - 40 + 1))}%`;
</script>

<template>
  <div>
    <div class="showcase">
      <div class="video" v-for="i in 6" :key="i">
        <div class="image-outer">
          <div class="image" />
        </div>
        <div class="title-outer">
          <div class="title" :style="{ width: titleWidth() }" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.showcase {
  background-image: linear-gradient(45deg, #000000e8 0%, #00000000 60%),
    radial-gradient(
      100% 100% at 0% 50%,
      #f1570a 21%,
      rgba(241, 87, 10, 0.75) 40.5%,
      rgba(241, 87, 10, 0.5) 60%,
      rgba(241, 87, 10, 0) 99%
    ),
    linear-gradient(180deg, #ffffb5 0%, #f6d860 14%, #e08c70 31%, #e08c70 51%, #59c1ba 77%, #00d4ff 94%);
  width: 100%;
  // aspect-ratio: 16/9;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing: border-box;
  overflow: hidden;

  .video {
    display: flex;
    flex-direction: column;

    .image-outer {
      padding: 7.5px 7.5px 0 7.5px;
      overflow: hidden;
      width: 100%;
      aspect-ratio: 16/9;
      box-sizing: border-box;

      .image {
        height: 100%;
        width: 100%;
        box-shadow: 0 0 0 50px #0c0c0d;
        border-radius: 8px;
      }
    }
    .title-outer {
      width: 100%;
      height: 30px;
      padding: 10px 7.5px 7.5px 7.5px;
      box-sizing: border-box;
      overflow: hidden;

      .title {
        height: 100%;
        box-shadow: 0 0 0 200px #0c0c0d;
        border-radius: 8px;
      }
    }
  }
}
</style>
