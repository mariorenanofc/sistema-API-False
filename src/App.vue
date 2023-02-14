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
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #5E17EB;
  }



</style>
