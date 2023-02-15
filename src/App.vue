<template>
  <NavBar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <Footer />
</template>


<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';


  export default{
    components: {
    NavBar,
    Footer
  },
  data() {
    return{
      logo_src: "/img/logo.png",
      app_name: "Logo-png"

    }
  }

  }
</script>

<style>
  * {
  font-family: Helvetrica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 20px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  color: #5E17EB;
}

@media screen and (min-width: 320px) {
  h1 {
    font-size: 28px;
    margin-bottom: 28px;
  }
}

@media screen and (min-width: 480px) {
  .main-container {
    margin: 40px;
  }

  h1 {
    font-size: 36px;
  }
}


</style>
