<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/contact">con</router-link>
    <router-link to="/about">about</router-link>
    <router-view ></router-view>
  </div>
</template>

<script>
 
export default {
  name: 'app',
  created(){
    console.log(this.$router)
  }
}
</script>
 