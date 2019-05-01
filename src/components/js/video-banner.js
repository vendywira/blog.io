import YoutubeVideo from "@component/YoutubeVideo.vue"

export default {
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 345,
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
        }
      ]
    }
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  },
  components: {
    YoutubeVideo,
  }
}