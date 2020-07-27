<template>
  <div class="tab-slide">
    <div class="tab-nav tab-nav--prev disabled" v-html="smartArrow('left', '#CCAE68')"></div>
    <swiper :options="swiperOptions" ref="swiper">
      <swiper-slide
        v-for="currency in currencyList"
        :key="currency"
      >
        <div :class="['tab', {'active': currentCurrency === currency}]"
             v-on:click="$emit('change-currency', currency)"> {{currency}} </div>
      </swiper-slide>
    </swiper>
    <div class="tab-nav tab-nav--next" v-html="smartArrow('right', '#CCAE68')"></div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import swiperNavigationMixin from '../../mixins/SwiperNavigationMixin.js'
  import smartArrow from '../../services/smart-arrow-service'

  export default {
    name: "Tabs",
    components: {
      Swiper,
      SwiperSlide
    },
    mixins: [swiperNavigationMixin],
    props: [
      'currencyList',
      'currentCurrency'
    ],
    data() {
      return {
        swiperOptions: {
          slidesPerGroup: 3,
          slidesPerView: 3,
          allowTouchMove: false,
          watchOverflow: true,
          navigation: {
            nextEl: '.tab-nav--next',
            prevEl: '.tab-nav--prev'
          },
          breakpoints: {
            380: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            420: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            600: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            720: {
              slidesPerView: 7,
              slidesPerGroup: 7,
            }
          }
        }
      }
    },
    methods: {
      smartArrow
    }
  }
</script>

<style scoped>
  .tab-slide {
    color: var(--header-text-color);
    display: flex;
    min-height: 49px;
    font-weight: 500;
  }
  .tab {
    padding: 15px 25px;
    cursor: pointer;
    transition: all .3s;
    border-radius: 5px 5px 0 0;
    user-select: none;
    width: fit-content;
  }
  .tab:hover {
    background-color: var(--main-back-color);
    color: var(--main-text-color);
    opacity: .3;
  }
  .tab.active {
    background-color: var(--main-back-color);
    color: var(--main-text-color);
  }
  .tab.active:hover {
    opacity: 1;
  }
  .tab-nav {
    outline: none;
    user-select: none;
    display: flex;
    align-items: center;
    width: 8px;
    border-radius: 100%;
    cursor: pointer;
    transition: all .2s;
  }
  .tab-nav:hover {
    transform: scale(1.3);
  }
  .tab-nav.disabled {
    opacity: 0;
  }
  .tab-nav--next {
    margin-left: 5px;
  }
  .tab-nav--prev {
    margin-right: 5px;
  }
  .tab-nav svg{
    height: 15px;
  }

</style>
