<template>
    <div class="main-container">
      <h1>Aqui você pode editar ou deletar os links hospedados nesse site!</h1>
      <EditList />
    </div>
  </template>
  
  <script>
import EditList from '@/components/EditList.vue'
  
  
  export default {
    name: 'editlinks',
    components: {
  
        EditList
      
    }
  }
  </script>