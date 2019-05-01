export default {
  name: 'VueYoutube',
  data() {
    return {
      video: {
        url: 'https://www.youtube.com/watch?v=DM8XH3l37Z0&list=RDDM8XH3l37Z0&start_radio=1'
      }
    }
  },
  methods: {
    getId() {
      let id = this.$youtube.getIdFromUrl(this.video.url)
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