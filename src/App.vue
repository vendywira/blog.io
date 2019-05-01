<template>
  <div class="app">
    <carousel></carousel>
    <home></home>
    <video-slider></video-slider>
  </div>
</template>

<script>
	import Home from "@page/Home.vue";
	import Carousel from "@component/Carousel.vue";
	import VideoSlider from "@component/VideoSlider.vue";

	export default {
		data() {
			return {};
		},
		components: {
			Home,
			Carousel,
			VideoSlider
		}
	};
</script>