import Vue from "vue";
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default {
  name: 'VueYoutube',
  data() {
    return {
      videos: [{
          title: "Seken Sayang",
          url: 'https://www.youtube.com/watch?v=bPzxqYEoEMY&list=RDDM8XH3l37Z0&index=4',
          sequence: 0
        },
        {
          title: "Seken YESSY DIANA - BUKTI TRESNA",
          url: 'https://www.youtube.com/watch?v=yVVDKV6TErA&list=RDyVVDKV6TErA&start_radio=1',
          sequence: 1
        }
      ]
    }
  },
  methods: {
    getId(url) {
      let id = this.$youtube.getIdFromUrl(url)
      console.log(id);
      return id
    },
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('\\o/ we are watching!!!')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}