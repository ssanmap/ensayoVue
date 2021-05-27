<template>
    <div class="">
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">MonsterPage</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/">Home</a></li>
      <li><a href="blog">Nosotros</a></li>
      <!-- <li><a href="#">Acerca De</a></li> -->
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="/"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="/"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>

    </div>
</template>

<script>
    export default {
            name: 'Nav'
    }
</script>

<style scoped>
nav{
    height: 60px;
    margin-bottom: -10px;
}
</style>