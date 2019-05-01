export default {
  name: 'VueYoutube',
  data() {
    return {
      videoId: 'lG0Ys-2d4MA'
    }
  },
  methods: {
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