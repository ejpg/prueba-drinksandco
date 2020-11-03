<template>
  <div>
    <div class="link-title">
      <h3>Crea tu cuenta</h3>
      <a href="#">Entra si estas ya registrado</a>
    </div>
    <div>
      <div>
        <form action="#" @submit="signIn">
          <div class="d-flex">
            <div class="form-group w-50">
                <label for="name">Nombre*</label>
                <input type="text" id="name" v-model="account.name" v-bind:class="{ 'is-invalid': submitted && !account.name }" class="form-control">
            </div>
            <div class="form-group w-50">
                <label for="lastname">Apellidos*</label>
                <input type="text" id="lastname" v-model="account.lastname" v-bind:class="{ 'is-invalid': submitted && !account.lastname }" class="form-control">
            </div>
          </div>
          <div class="d-flex">
            <div class="form-group w-50">
                <label for="email">Correo electrónico*</label>
                <input type="email" id="email" v-model="account.email" v-bind:class="{ 'is-invalid': submitted && !account.email }" class="form-control">
            </div>
            <div class="form-group w-50">
                <label for="password">Contraseña*</label>
                <input type="password" if="password" v-model="account.password" v-bind:class="{ 'is-invalid': submitted && !account.password }" class="form-control">
            </div>
          </div>
          <div>
            <div>
              <button type="submit" class="btn btn-primary float-right">Crear cuenta</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      account: {
        name: null,
        lastname: null,
        email: null,
        password: null
      },
      submitted: false
    }
  },
  methods: {
    signIn (e) {
      this.submitted = true

      if (
        this.account.name &&
        this.account.lastname &&
        this.account.email &&
        this.account.password
      ) {
        console.log('SUBMIT', this.account)
      }

      e.preventDefault()
    }
  }
}
</script>

<style scoped lang="scss">
  .is-invalid {
    border-color: red;
  }

  .form-group {
    display: grid;
    margin: 1rem 0;
    label {
      margin-bottom: .5rem;
    }

    input {
      font-size: 1rem;
      padding: .3rem;
    }
    &:nth-child(1) {
      margin-right: 1rem;
    }
  }
</style>
