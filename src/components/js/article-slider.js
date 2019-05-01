import ArticleOverview from "@component/ArticleOverview.vue"
import Slider from "@component/Slider.vue"

export default {
  data() {
    return {
      items: [{
          title: "image 1",
          src: 'img/banner-main-1.png',
          alt: 'image 1',
          sequence: 0
        },
        {
          title: "image 2",
          src: 'img/banner-main-2.png',
          alt: 'image 2',
          sequence: 1
        },
        {
          title: "image 3",
          src: 'img/banner-main-3.png',
          alt: 'image 3',
          sequence: 2
        },
        {
          title: "image 4",
          src: 'img/banner-main-4.png',
          alt: 'image 4',
          sequence: 3
        },
        {
          title: "image 5",
          src: 'img/banner-main-5.png',
          alt: 'image 5',
          sequence: 4
        },
        {
          title: "image 6",
          src: 'img/banner-main-6.png',
          alt: 'image 6',
          sequence: 5
        }
      ]
    }
  },
  components: {
    Slider,
    ArticleOverview
  }
}