<template>
  <div class="course-display">
    <div class="multiplier-container">
      <input v-model="multiplier">
      <div>{{currentRates.data.base}}</div>
    </div>
    <swiper :options="swiperOptions" ref="swiper" class="swiper-container">
      <template v-for="(rate, currency) in currentRates.data.rates">
        <swiper-slide
          v-if="currency !== currentRates.data.base"
          class="swiper-slide"
          :key="currency"
        >
          <div class="course-card">
            <div class="course-card--info">
              {{multiplierValidated}} <span>{{currentRates.data.base}} =</span>
            </div>
            <div class="course-card--data">
              <span class="course-card--rate">{{(rate * multiplierValidated).toFixed(2)}}</span>
              <span class="course-card--currency">{{currency}}</span>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
    <div class="course-display-nav-container">
      <div class="course-display-nav course-display-nav--prev disabled"
           v-html="smartArrow('left', '#282828') + 'назад'"></div>
      <div class="course-display-nav course-display-nav--next"
           v-html="'вперед' + smartArrow('right', '#282828')"></div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import swiperNavigationMixin from '../../mixins/SwiperNavigationMixin.js'
  import smartArrow from '../../services/smart-arrow-service'

  export default {
    name: "CourseDisplay",
    props: ['currentRates'],
    mixins: [swiperNavigationMixin],
    components: {
      Swiper,
      SwiperSlide
    },
    data () {
      return {
        multiplier: 5,
        multiplierValidated: 5,
        swiperOptions: {
          slidesPerColumn: 2,
          slidesPerView: 1,
          slidesPerGroup: 1,
          allowTouchMove: false,
          watchOverflow: true,
          navigation: {
            nextEl: '.course-display-nav--next',
            prevEl: '.course-display-nav--prev'
          },
          breakpoints: {
            500: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            }
          }
        }
      }
    },
    watch: {
      multiplier: function () {
        if (
          !isNaN(this.multiplier)
          && !~this.multiplier.indexOf('e')
          && this.multiplier < 100
          && this.multiplier !== 0
        )
          this.multiplierValidated = this.multiplier
      }
    },
    methods: {
      smartArrow
    }
  }
</script>

<style scoped>
  .course-display {
    margin-top: 30px;
    color: var(--main-text-color);
  }
  .multiplier-container {
    font-size: 18px;
    display: flex;
    justify-content: flex-end;
    color: var(--alt-text-color);
    margin-bottom: 30px;
    font-weight: normal;
    margin-right: 15px;
  }
  .multiplier-container input {
    border: none;
    text-align: right;
    font-size: 18px;
    border-bottom: 1px solid var(--alt-text-color);
    max-width: 120px;
    margin-right: 10px;
    outline: none;
  }
  .swiper-container {
    height: 300px;
  }
  .swiper-slide {
    height: 50%;
  }
  .course-card{
    box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);;
    border-radius: 12px;
    padding: 18px 30px;
    margin: 15px;
    font-size: 24px;
    font-weight: 300;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
  .course-card--info span {
    color: var(--alt-text-color);
  }
  .course-card--rate {
    font-size: 48px;
    margin-right: .2em;
  }
  .course-card--currency {
    font-size: 24px;
  }
  .course-display-nav-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-weight: 300;
  }
  .course-display-nav {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16);
    border-radius: 8px;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s;
    user-select: none;
    outline: none;
  }
  .course-display-nav:hover {
    transform: scale(1.1);
  }
  .course-display-nav.disabled:hover {
    transform: scale(1);
  }
  .course-display-nav.disabled {
    background-color: var(--shade-color);
    color: var(--alt-text-color);
  }
  .course-display-nav:first-child {
    margin-right: 20px;
  }
  @media (max-width: 719px) {
    .course-card--rate {
      font-size: 36px
    }
    .course-card--currency {
      font-size: 24px;
    }
    .course-card {
      font-size: 18px;
    }
  }
</style>
<style>
  .course-display-nav--prev svg {
    margin-right: 10px ;
  }
  .course-display-nav--next svg {
    margin-left: 10px ;
  }
  .course-display-nav.disabled svg {
    opacity: .5;
  }
</style>