<template>
  <div id="app">
    <p>I hava a sevret message</p>
    <p v-if="show" class="screet">{{message}}</p>
    <button v-else @click="show = true"> show message</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      message:'hi'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
