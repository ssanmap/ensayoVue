<template>
    <div>
        <Nav />
       <div class="jumbotron text-center">
  <h1>Sobre Nosotros</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>

<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
    export default {
        components:{
            Nav
        }
    }
</script>

<style scoped>

</style>