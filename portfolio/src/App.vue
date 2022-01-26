<template>
  <v-app>
    <div class="main">
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
  <v-btn color="white--text" text class="white--text" href="/">
          <h2 class="subheading">VICKY</h2></v-btn
        >
 <v-spacer></v-spacer>
      <v-btn color="white--text" text class="white--text" href="/about">
          About Me</v-btn
        >
      <v-btn color="white--text" text class="white--text" href="/myProjects">
          My Project</v-btn
        >
          
       <v-btn color="white--text" text class="white--text" v-bind="attrs"
          v-on="on" href="/contactMe">
          Contact Me</v-btn
        >
</v-app-bar>
  
<router-view/>
    </div>
    <foot />
  </v-app>
</template>

<script>
// import myProjects from "./views/myProjects.vue"
// import contactMe from './views/contactMe.vue'
// import carosoul from './views/carosoul.vue'
import foot from "./components/foot.vue";
export default {
  name: "App",
  components: {
    foot,
    // contactMe,
    // carosoul,
    // myProjects,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");


</style>