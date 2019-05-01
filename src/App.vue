<template>
  <div class="app">
    <carousel></carousel>
    <home></home>
    <video-carousel></video-carousel>
  </div>
</template>

<script>
import Home from "@page/Home.vue";
import Carousel from "@component/Carousel.vue";
import VideoCarousel from "@component/VideoCarousel.vue";

export default {
  data() {
    return {};
  },
  components: {
    Home,
    Carousel,
    VideoCarousel
  }
};
</script>