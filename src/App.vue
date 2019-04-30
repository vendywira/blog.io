<template>
  <div class="app">
    <carousel></carousel>
    <home></home>
  </div>
</template>

<script>
import Home from "@page/Home.vue";
import Carousel from "@component/Carousel.vue";

export default {
  data() {
    return {};
  },
  components: {
    Home,
    Carousel
  }
};
</script>