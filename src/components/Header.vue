<template>
  <div>
    <h5>LOGO</h5>
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Contacto</a>
      <a href="#">Nuestro blog</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
div {
  display: flex;
  border: solid 1px #000;
  padding: .5rem;

  nav {
    display: flex;
    margin-left: auto;
    a {
      margin: auto;
      padding: .5rem;
    }
  }
}
</style>
