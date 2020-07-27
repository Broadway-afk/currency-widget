<template>
  <div class="vue-currency-widget">
    <div class="currency-widget-header">
      <div class="container">
        <h1>Курс {{currentCurrency}} сегодня</h1>
        <tabs
          :currency-list="currencyList"
          :current-currency="currentCurrency"
          v-on:change-currency="changeCurrency($event)"
        />
      </div>
    </div>
    <div class="container">
      <div class="course-display-container">
        <course-display :current-rates="currentRates" v-if="currentRates.data"/>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from './elements/Tabs'
import CourseDisplay from './elements/CourseDisplay';

export default {
  name: 'Widget',
  components: {
    Tabs,
    CourseDisplay
  },
  data() {
    return {
      currentCurrency: 'EUR',
      currentRates: {},
      currencyList: []
    };
  },

  created() {
    this.getCurrentRates()
  },
  methods: {
    getCurrentRates() {
      this.$api.currencyData({
        params: {
          base: this.currentCurrency,
        }
      }).then(response => {
        this.currentRates = response
        if (this.currencyList.length === 0){
          this.currencyList = Object.keys(response.data.rates)
          this.currencyList.unshift(this.currentCurrency)
        }
      }).catch(error => {
        console.warn(error)
      })
    },
    changeCurrency(currency) {
      this.currentCurrency = currency;
      this.getCurrentRates()
    }
  }
}
</script>

<style scoped>
  .vue-currency-widget {
    width: 100%;
    height: 100vh;
    min-height: 582px;
    overflow: hidden;
  }
  .currency-widget-header {
    background-color: var(--main-color);
  }
  h1 {
    margin: 0;
    padding: 30px 0 8px 0;
    font-size: 21px;
    font-weight: normal;
  }
  .course-display-container {
    margin-left: -15px;
    margin-right: -15px;
  }
</style>
