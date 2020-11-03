import Vue from 'vue'

Vue.filter('currecy', (value) => {
  return value.toFixed(2).replace('.', ',')
})
