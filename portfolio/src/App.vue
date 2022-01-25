<template>
  <v-app>
        <div class="main" >
    <header>

        <div class="container">
            <nav class="navbar">
                <a href="#" class="logo">Logo</a>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">My Projects</a></li>
                    <li><a href="#">Contact Me</a></li>
                   
                </ul>
                <i class="fas fa-bars fa-2x" id="burger"></i>
                <!-- <v-btn id="burger"> <v-icon class="white--text" >menu</v-icon></v-btn> -->
               
            </nav>
          
        </div>

       

    </header>
      <router-view/>

    </div>

    <foot />
  </v-app>
</template>

<script>

import foot from "./components/foot.vue";
export default {
  name: "App",
  components: {
    foot,
  },
};
</script>
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    box-sizing: border-box;
    font-family: 'Montserrat',sans-serif;
   
}

.main{
    margin: 0;
    overflow-x: hidden;
  
}

header{
    // min-height: 100vh;
    // position: relative;
    .container{
        max-width: 1368px;
        margin: 0 auto;
        padding: 1rem 2rem;
         background-color: black;
        .navbar{
            min-height: 10vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .logo{
                font-size: 2.25rem;
                text-decoration: none;
                text-transform: uppercase;
                color: #fff;
                font-weight: 700;
            }
            .nav-links{
                display: flex;
                align-items: center;
                li{
                    list-style-type: none;
                    a{
                        text-decoration: none;
                        color: #fff;
                        margin: 0 0.25rem;
                        font-weight: 500;
                        font-size: 1.25rem;
                        position: relative;
                        &::after{
                            position: absolute;
                            content: '';
                            background-color: #fff;
                            bottom: -5px;
                            left: 0;
                            width: 0%;
                            height: 3px;
                            transition: 0.3s ease all;
                        }
                        &:hover::after{
                            width: 100%;
                        }
                    }
                }
                
            }
            i{
                display: none;
                color: #fff;
                cursor: pointer;
            }
        }
        
    }
    
}

@media(max-width: 850px){
    header{
        .container{
            .navbar{
                .nav-links{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #fff;
                    height: 100%;
                    width: 225px;
                    margin: 0;
                    padding: 0;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    transform: translateX(-100%);
                    transition: 0.4s ease all;
                    z-index: 10;
                    li{
                        a{
                            color: #000;
                            &::after{
                                background-color: #000;
                            }
                        }
                    }
                   
                    &.active{
                        transform: translateX(0%);
                    }
                }
                i{
                    display: block;
                }
            }
            
        }
    }   
}


</style>