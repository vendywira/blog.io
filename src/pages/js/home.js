import Carousel from "@component/Carousel.vue";
import VideoSlider from "@component/VideoSlider.vue";
import ArticleSlider from "@component/ArticleSlider.vue";

export default {
  name: "Hone",
  data() {
    return {
      menuVisible: false
    };
  },
  components: {
    Carousel,
    VideoSlider,
    ArticleSlider,
  }
};