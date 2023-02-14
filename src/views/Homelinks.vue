<template>
  <Banner />
  <div class="main-container">
    <h1>Adicione links sobre artigos Tecnológicos!</h1>
    <LinkForm />
  </div>
</template>

<script>
import LinkForm from '../components/LinkForm.vue'
import Banner from "../components/Banner.vue"


export default {
  name: 'homelinks',
  components: {
    Banner,
    LinkForm
  }
}
</script>
