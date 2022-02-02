<template>
  <v-row justify="center" class="mt-12">
    <v-col cols="4">
      <v-card>
        <v-card-text>
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json"
            background="transparent"
            speed="1"
            style="width: 500px; height: 300px"
            loop
            autoplay
          ></lottie-player>
          <v-text-field v-model="email" label="Email" outlined></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            outlined
          ></v-text-field>

         <v-card-actions>
        <v-btn text class="blue--text"> Login</v-btn>
          
          <v-spacer></v-spacer>
         
           <v-btn text class="orange--text" href="/register"> register</v-btn>
        </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss" scoped>
</style>