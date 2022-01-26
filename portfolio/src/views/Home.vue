<template>
<v-carousel
        cycle
        height="580"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(image, i) in images"
          :key="i"
          :src="image.src"
        >
        </v-carousel-item>
      </v-carousel>
    <!-- <carosoul/> -->
 
</template>

<script>
// import carosoul from './carosoul.vue'
export default {
  name: 'Home',
  components:{
    // carosoul,
  },
   data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        images: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            // src:'1.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            // src:'2.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            // src:'logo.svg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            // src:'4.jpg',
          },
        ],
      }
    },
  
}
</script>
<style  lang="scss" scoped>

</style>