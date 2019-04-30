import VueHCarousel from 'vue-h-carousel';

export default {
  name: 'Carausel',
  data() {
    return {
      label: '<a href="/promosi" target="_blank">Lihat Semua Promo</a>',
      images: [{
          url: 'http://www.blibli.com',
          src: 'img/banner-main-1.png',
          alt: 'image 1',
          targetWindow: '_blank'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-2.png',
          alt: 'image 2',
          targetWindow: 'a'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-3.png',
          alt: 'image 3',
          targetWindow: 'a'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-4.png',
          alt: 'image 4'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-5.png',
          alt: 'image 5'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-6.png',
          alt: 'image 6'
        }
      ]
    }
  },
  methods: {
    slideClicked(i) {
      console.log('sideClicked', JSON.stringify(i))
    },
    pagingButtonClicked(i) {
      console.log('pagingButtonClicked', JSON.stringify(i))
    },
    arrowButtonClicked(i) {
      console.log('arrowButtonClicked', JSON.stringify(i))
    },
    postPaginationLabelClicked() {
      console.log('postPaginationLabelClicked')
    }
  },
  components: {
    VueHCarousel
  }
}