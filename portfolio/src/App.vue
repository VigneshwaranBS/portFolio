<template>
  <v-app>
    <div class="main" >
    <v-app-bar
  color="purple"
  flat
  outlined
>
 <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="vignesh"
      >
    </v-avatar>

 <!-- <v-toolbar-title class="white--text" href="/home">Vigneshwaran</v-toolbar-title> -->
  <v-btn color="white--text" text class="white--text" href="/home">
          <h2>VIGNESHWARAN</h2></v-btn
        >
 <v-spacer></v-spacer>
      <v-btn color="white--text" text class="white--text" href="/about">
          About Me</v-btn
        >
      <v-btn color="white--text" text class="white--text" href="/myProjects">
          My Project</v-btn
        >
       <v-btn color="white--text" text class="white--text" href="/contactMe">
          Contact Me</v-btn
        >
</v-app-bar>
      <router-view/>
    </div>
   <foot/> 
  </v-app>
  
</template>

<script>
import foot from "./components/foot.vue"
export default {
name:"App",
components:{
  foot,
}
}
</script>
<style lang="scss" scoped>
main{
  background-color: #BDBDBD;
}
</style>


<script>
export default {
 
};
</script>
