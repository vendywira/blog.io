import YoutubeVideo from "@component/YoutubeVideo.vue"
import Slider from "@component/Slider.vue"

export default {
  data() {
    return {
      items: [{
          title: "Seken Sayang",
          url: 'https://www.youtube.com/watch?v=bPzxqYEoEMY&list=RDDM8XH3l37Z0&index=4',
          sequence: 0
        },
        {
          title: "Seken YESSY DIANA - BUKTI TRESNA",
          url: 'https://www.youtube.com/watch?v=yVVDKV6TErA&list=RDyVVDKV6TErA&start_radio=1',
          sequence: 1
        },
        {
          title: "Seken Sayang",
          url: 'https://www.youtube.com/watch?v=bPzxqYEoEMY&list=RDDM8XH3l37Z0&index=4',
          sequence: 2
        },
        {
          title: "Seken YESSY DIANA - BUKTI TRESNA",
          url: 'https://www.youtube.com/watch?v=yVVDKV6TErA&list=RDyVVDKV6TErA&start_radio=1',
          sequence: 3
        },
        {
          title: "Seken Sayang",
          url: 'https://www.youtube.com/watch?v=bPzxqYEoEMY&list=RDDM8XH3l37Z0&index=4',
          sequence: 4
        },
        {
          title: "Seken YESSY DIANA - BUKTI TRESNA",
          url: 'https://www.youtube.com/watch?v=yVVDKV6TErA&list=RDyVVDKV6TErA&start_radio=1',
          sequence: 5
        },
        {
          title: "Seken Sayang",
          url: 'https://www.youtube.com/watch?v=bPzxqYEoEMY&list=RDDM8XH3l37Z0&index=4',
          sequence: 6
        },
        {
          title: "Seken YESSY DIANA - BUKTI TRESNA",
          url: 'https://www.youtube.com/watch?v=yVVDKV6TErA&list=RDyVVDKV6TErA&start_radio=1',
          sequence: 7
        },
        {
          title: "Seken Sayang",
          url: 'https://www.youtube.com/watch?v=bPzxqYEoEMY&list=RDDM8XH3l37Z0&index=4',
          sequence: 8
        },
        {
          title: "Seken YESSY DIANA - BUKTI TRESNA",
          url: 'https://www.youtube.com/watch?v=yVVDKV6TErA&list=RDyVVDKV6TErA&start_radio=1',
          sequence: 9
        }
      ]
    }
  },
  components: {
    Slider,
    YoutubeVideo
  }
}