<template>
  <v-carousel cycle height="580" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src">
      <v-row align="center" justify="center">
      <v-col class="text-center mt-16" cols="12">
        <h1 class="text-h2 white--text ">COMING SOON</h1>
      </v-col>
    </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          // src:'1.jpg',
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          // src:'2.jpg',
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          // src:'logo.svg',
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          // src:'4.jpg',
        },
      ],
    };
  },
};
</script>
<style  lang="scss" scoped>
</style>