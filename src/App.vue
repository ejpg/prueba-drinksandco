<template>
  <div id="app">
    <Header />
    <div class="container">
      <div class="d-flex">
        <div id="productList" class="w-100">
          <ProductList
            v-bind:products="products"
          ></ProductList>
        </div>
      </div>
      <div class="d-flex">
        <div id="resumen">
          <Resumen
            v-bind:products="products"
          ></Resumen>
        </div>
        <div id="signIn">
          <SignIn></SignIn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Resumen from './components/Resumen.vue'
import ProductList from './components/ProductList.vue'
import SignIn from './components/SignIn.vue'
import './assets/scss/global.scss'

export default {
  name: 'App',
  components: {
    Header,
    Resumen,
    ProductList,
    SignIn
  },
  data () {
    return {
      products: []
    }
  },
  created () {
    this.$http
      .get('https://demo9415114.mockable.io/drinksandco-checkout-technical-test')
      .then(response => {
        if (response.status === 200 && response.data.code === 200) {
          this.products = response.data.data
        }
      })
  }
}
</script>

<style lang="scss">
  .container {
    width: 80vw;
    margin: auto;
  }

  #productList, #signIn, #resumen {
    border: solid 1px #000;
    margin: 1rem 0;
    padding: 1rem;
  }
  #resumen {
    width: 30%;
  }
  #signIn {
    width: 70%;
    margin-left: 2rem;
  }

  .d-flex {
    display: flex;
  }
</style>
