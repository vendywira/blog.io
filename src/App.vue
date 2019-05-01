<template>
  <div class="app">
    <carousel></carousel>
    <home></home>
    <video-banner></video-banner>
  </div>
</template>

<script>
import Home from "@page/Home.vue";
import Carousel from "@component/Carousel.vue";
import VideoBanner from "@component/VideoBanner.vue";

export default {
  data() {
    return {};
  },
  components: {
    Home,
    Carousel,
    VideoBanner
  }
};
</script>