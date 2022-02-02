<template>
  <v-row justify="center" mt-6>
    <v-col cols="4">
      <v-card ref="form">
        <v-card-text>
          <div class="anime pl-16">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_wd1udlcz.json"
                background="transparent"
                speed="2"
                style="width: 300px; height: 200px"
                loop
                autoplay
              ></lottie-player>
          </div>
          <v-text-field
            v-model="fname"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="First Name"
            placeholder="First Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="lname"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Last Name"
            placeholder="Last Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="[() => !!email || 'This field is required', addressCheck]"
            label="Email"
            placeholder="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="[() => !!password || 'This field is required']"
            label="Password"
            required
            placeholder="Password"
          ></v-text-field>
          <v-text-field
            v-model="phone"
            :rules="[() => !!phone || 'This field is required']"
            label="Phone Number"
            required
            type="number"
            placeholder="Phone Number"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn text href="/" class="orange--text">
            <span>Already Registered ?</span> Login
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="submit"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "register",
};
</script>

<style lang="scss" scoped>
</style>