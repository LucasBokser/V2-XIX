<template>

  <v-app>
<!--    <p>{{ $t('Hello') }} - {{ $t("Welcome") }}</p>-->

    <nav id="navbar-app" class="nav navbar-light bg-faded sticky-top navbar-expand-md " :class="{change_color: scrollPosition > 50}">
        <div class="container">  
          <a class="navbar-brand mb-2" href="#" target="_blank">
            <img  class="img-responsive logonav" src="./assets/XIX.jpg" alt="ascrea logo">
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <v-icon class="colap" color="indigo lighten-5" small>fas fa-bars</v-icon>
          </button>
          <div class="collapse navbar-collapse titles" id="navbarSupportedContent">
            <ul class="nav ml-auto  ">

              <li class="nav-item active">
                <a href="#accueil" class="nav-link" >
                  <b>{{ $t('Acceuil') }}</b>
                </a>
              </li>
              <li class="nav-item" >
                <a href="#activites" class="nav-link" >
                  <b>Activités</b>
                </a>
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link" >
                  <b>Services</b>
                </a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link" >
                <b>Contact</b>
                </a>
              </li>
<!--              <li class="nav-item">-->
<!--                <a href="#quisommenous" class="nav-link" >-->
<!--                  <b>Si on veut faire plus</b>-->
<!--                </a>-->
<!--              </li>-->
              <!-- <li class="nav-item">
                <a href="#sponsor" class="nav-link" >
                  <b>SPONSORS</b>
                </a>
              </li> -->
              <p>
                <select v-model="$i18n.locale">
                  <option value="fr">fr</option>
                  <option value="en">en</option>
                </select>
              </p>
            </ul>
          </div>
        </div>
    </nav>
<!--    <div id="loader">-->
<!--      <loader class="mt-5" />-->
<!--    </div>-->
      <div  data-spy="scroll" data-target="#navbar-app" data-offset="0">
        <div id="accueil">
          <accueil  />
        </div>
        <div id="activites">
          <activites class="mt-5"/>
        </div>
        <div id="services">
          <services   class="mt-5"/>
        </div>
        <div id="contact">
          <contact   class="mt-5"/>
        </div>
<!--        <div id="quisommenous">-->
<!--          <quisommenous  class="mt-5"/>-->
<!--        </div>-->
<!--        <div id="sponsor">-->
<!--          <sponsor  class="mt-5"/>-->
<!--        </div>-->
      </div>
        <v-row class="footer d-none d-lg-block " >

            <v-divider></v-divider>

          <v-col align="center" class="mt-5">
            <p style="color:black">© Copyright 2021 <b style="color:green">XIX</b></p>
            <img  class="img-responsive ascreaLogo" src="./assets/XIXblanc.png" alt="ascrae logo" width="50" >
          </v-col>
        </v-row>
  </v-app>
</template> 

<script>
import accueil from './components/accueil';
import activites from './components/activites';
import services from './components/services';
import contact from './components/contact';
// import Loader from "./components/loader";
// import quisommenous from './components/quisommenous';
// import sponsor from './components/sponsor';

export default {
  name: 'App',

  components: {
    // Loader,
    accueil,
    activites,
    services,
    contact,
    // quisommenous,
    // sponsor,
  },
  data: () => ({
    scrollPosition: null,
    active: 'guide'
  }),
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  },
  mounted() {
      window.addEventListener('scroll', this.updateScroll);
  }
};
</script>
<style >
html{
  scroll-behavior: smooth;

}
@font-face {/* coolveticacondensedrg.ttf   ,   Aero Matics Regular.ttf   ,  libel-suit-rg.otf  */
   font-family: myFirstFont;
   src: url(/AeroMaticsRegular.ttf);
}
* {
   font-family: myFirstFont;
}

/*.nav-link b{*/
/*    color: gray;*/
/*}*/
.nav .nav-item a:hover{
    text-decoration:none;
    background-color: black;
    color: #fff;
}
a:hover{
    color: #fff;
}
.nav-item{
   margin-right:20px
}

/* .view{
  margin-top: -6.5%;
} */

.logo{
  max-width:100px;
}
/*the top navbar / / / / / /E1F4CB,D8F1BC /CDEAC0 / / / */
.view,body,html{height:100%}.nav{background-color:black; margin-top: 4px;}.page-footer,.top-nav-collapse{background-color:rgba(0,0,0,.2)}@media only screen and (max-width:768px){.nav{background-color:rgba(0,0,0,.2)}}

@media (min-width:900px) {
.navbar-dark .nav-item > .nav-link.active  {
    /* color: gray; */
    background-color:white;
}}

h1 , b , p , h2 , h4 , strong , .btnn , .caption , .inscrireInfo , .caption{
  font-size: 1.3em;
}

@media (min-width: 1200px) {

}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {

}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {

}

/* Landscape phones and down */
@media (max-width: 480px) {
  
 /* #navbarSupportedContent{
    background-color:black
  }*/

}
/* change navbar while scrolling */
.change_color {
    background-color: black;
}
/* the background of the btn on the navbar */
.nav>.active>a { 
            /* color: gray; */
            /* background-color: #a1d6c5; */
}
#navbar-app {
    /* box-shadow: 4px 0 20px -5px rgb(0 0 0 / 20%); */
    margin-top: -4px;
}
.footer{
    color:white;
    margin-top:100px;
    height:150px
}
.logonav{
    width: 55px;
    margin-top: -15px;   
  }
.nav-link b{
  color: yellow;
  font-weight: normal;
  letter-spacing: 2px;

}
.nav-link b:hover{
  color: #d9eea3;
}
.h{
  font-weight: bold;
}
.navbar-light .navbar-toggler{
  float: right;
  margin: 13px;
}
@media (max-width: 767px) {
.text{
  font-size: 3vw;

}
.h{
  font-size: 5vw;
}
  @font-face {
    font-family: Cyber;
    src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }
}
</style>