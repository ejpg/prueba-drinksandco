<template>
  <div>
    <div>
      <div>
        <h3><strong>Resumen del pedido</strong></h3>
      </div>
    </div>
    <div class="row-total">
      <div class="w-50">
        <p>Total de productos (IVA incluido):</p>
      </div>
      <div class="w-50 text-right">
        <p data-testid="total">{{ (total + iva) | currecy }}€</p>
      </div>
    </div>
    <div class="row-total">
      <div class="w-50">
        <p>Total de envio (imp. excl):</p>
      </div>
      <div class="w-50 text-right">
        <p>Envío gratuito</p>
      </div>
    </div>
    <div class="row-total">
      <div class="w-50">
        <p>Total sin IVA:</p>
      </div>
      <div class="w-50 text-right">
        <p data-testid="totalwithouthiva">{{ total | currecy }}€</p>
      </div>
    </div>
    <div class="row-total">
      <div class="w-50">
        <p>Total de impuestos</p>
      </div>
      <div class="w-50 text-right">
        <p data-testid="totaliva">{{ iva | currecy }}€</p>
      </div>
    </div>
    <div class="row-total discount" v-if="discount">
      <div class="w-50">
        <p>Descuento</p>
      </div>
      <div class="w-50 text-right">
        <p>-{{ discount | currecy }}€</p>
      </div>
    </div>
    <div class="row-total">
      <div class="w-50">
        <p><strong>Total a pagar</strong></p>
      </div>
      <div class="w-50 text-right">
        <p>
          <strong data-testid="totalwithdiscount">{{ (total + iva) - discount | currecy }}€</strong>
        </p>
      </div>
    </div>
    <div class="row-total">
      <div class="w-50">
        <p>¿Algún cupón descuento?</p>
      </div>
      <div class="w-50">
        <input class="form-control w-100" type="text" v-model="discountCode" />
      </div>
    </div>
    <div>
      <button class="btn btn-primary float-right">Pagar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resumen',
  props: {
    products: Array
  },
  data () {
    return {
      total: 0,
      iva: 0,
      discount: 0,
      discountCode: null
    }
  },
  methods: {
    pay () {
      // PARSEAR PRODUCTOS PARA EL POST AL BACKEND Y ENVIAR
      console.log('PAY', this.products)
    }
  },
  watch: {
    products (value) {
      this.total = value.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)

      if (this.total) {
        this.iva = 2100 / this.total
      } else {
        this.iva = 0
      }
    },
    discountCode (value) {
      // ENVIAR CODIGO AL BACKEND Y CHEQUEAR SI HAY DESCUENTO
      // SI HAY DESCUENTO APLICAR A LA VARIABLE discount
      console.log('DISCOUNT CODE', value)
    }
  }
}
</script>

<style scoped lang="scss">
  .row-total {
    display: flex;
    .text-right {
      text-align: right;
    }

    &.discount {
      color: green;
    }
  }
</style>
