<template>
  <div>
    <div class="link-title">
      <h3>Resummen de tu cesta</h3>
      <a href="#">Seguir comprando</a>
    </div>
    <div>
      <div>
        <table class="w-100">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Precio unidad</th>
              <th>Cantidad</th>
              <th><strong>Subtotal</strong></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, idx) in products" v-bind:key="product.item_id" >
              <td>IMG</td>
              <td>{{ product.name }}</td>
              <td>{{ product.price | currecy }}€</td>
              <td>
                <select v-model="product.qty">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
              <td>{{ product.price * product.qty | currecy }}€</td>
              <td >
                <button v-on:click="deleteProduct(idx)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    deleteProduct (idx) {
      this.products.splice(idx, 1)
    }
  }
}
</script>

<style scoped lang="scss">
  table {
    border-collapse: collapse;

    th {
      text-align: left;
      padding: 1rem;
    }
    td {
      padding: 1rem;
      border-top: solid 1px #000;
    }
  }
</style>
