<template>
  <div class="app">
    <carousel></carousel>
    <home></home>
    <vue-youtube></vue-youtube>
  </div>
</template>

<script>
import Home from "@page/Home.vue";
import Carousel from "@component/Carousel.vue";
import VueYoutube from "@component/Youtube.vue";

export default {
  data() {
    return {};
  },
  components: {
    Home,
    Carousel,
    VueYoutube
  }
};
</script>