import Vue from 'vue'
import VueApiService from 'vue-api-service'
import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.openrates.io',
  responseType: 'json'
})


const endpoints = {
  currencyData: {
    method: 'GET',
    url: '/latest'
  },
}

export default () => {
  Vue.use(VueApiService, {
    client,
    endpoints
  })
}