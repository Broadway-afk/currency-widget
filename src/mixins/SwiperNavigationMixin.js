export default {
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper
    }
  },
  mounted() {
    this.swiper.on('slideChangeTransitionEnd', () => {
      this.swiper.navigation.$nextEl[0].classList.remove('disabled')
      this.swiper.navigation.$prevEl[0].classList.remove('disabled')
      if (this.swiper.isBeginning) {
        this.swiper.navigation.$prevEl[0].classList.add('disabled')
      }
      if (this.swiper.isEnd) {
        this.swiper.navigation.$nextEl[0].classList.add('disabled')
      }
    })
  }
}