<template>
  <div id="app">
   <ul>
     <li>
       <router-link :to="{name:'home'}" >Home</router-link>
     </li>
     <li v-for="i in 10" :key="i">
       <router-link :to="{name:'menu' , params:{id:i} }">Menu{{i}}</router-link>
     </li>
   </ul>

   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

 <style scope>
a.router-link-active {
  background: blue;
}
a.router-link-exact-active {
  background: rgb(255, 0, 0);
}
</style>
 
 