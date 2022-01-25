<template>
 <v-parallax
    dark
     height="600"
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
<div class="contact">
    <div class="left pa-12">
        <v-card    width="400" >
        <h1 class="support">Contact Me</h1>
          <a href="mailto:bs.vigneshwaran@gmail.com" class="support-links">
            <p><v-icon>email</v-icon> :
              <span>bs.vigneshwaran@gmail.com</span>
            </p>
          </a>
          <a href="tel:(+91)9600510207" class="support-links">
            <p><v-icon>phone</v-icon> :
              <b class="phone">(+91) 960 051 5207 </b>
            </p>
          </a>
          <a href="tel:(+94) 638 221 9828" class="support-links">
            <p>
              <span>Feedback</span> :
              <v-icon>message</v-icon> 
              <b class="phone">(+91) 638 221 9828 </b>
            </p>
          </a>
        </v-card>
    </div>
      <div class="right pa-12">
        <v-card width="600 " >
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="first"
                    label="First Name"
                    outlined
                  ></v-text-field>
                </v-col>
    
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="last"
                    label="Last Name"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
    
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="email"
                    label=" Email"
                    outlined
                  ></v-text-field>
                </v-col>
    
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
    
              <v-textarea
                outlined
                counter
                label="Description"
                v-model="description"
              ></v-textarea>
    
              <v-btn class="deep-orange white--text justify-center">Submit</v-btn>
            </v-container>
          </v-form>
        </v-card>
      </div>
</div>
 </v-parallax>
</template>

<script>
export default {
  name: "contactMe",
  data() {
    return {
        first:"",
        last:"",
        email:"",
        password:"",
        description:"",

    };
  },
};
</script>

<style  lang="scss" scoped>
.contact{
    display: flex;
    justify-content: space-evenly;
}
 .support {
      font-family: "Poppins", sans-serif;
      margin-top: 25px;
    }
    .support-links {
      text-decoration: none;
      color: #414040;
      font-weight: 400;
      font-size: 18px;
      margin-top: 20px;

      p {
        color: #414040;
        font-weight: 400;
        font-size: 18px;
        padding: 10px;
      }
    }
    h1{
        color: black;
        margin-left: 15px;
    }
    
    @media (max-width: 780px) {
        .contact{
            display: flex;
            flex-direction: column;
            flex-direction: column-reverse;
        }
    }

    
</style>