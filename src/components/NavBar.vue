<template>
    <div id="nav">
        <router-link to="/" id="logo_url">
            <img :src="logo" :alt="alt" id="logo" />
        </router-link>
        <router-link to="/">Início</router-link>
        <router-link to="/list">Listas</router-link>
        <router-link to="/edit">Editar</router-link>
  </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: [
            "logo",
            "alt"
        ]
    }
</script>

<style scoped>
    #nav {
        background-color: #f0ffff;
        border-bottom: 4px solid #211D47;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: 500;
    }

    
    #nav a {
        color: #5E17EB;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }
    
    #nav a:hover {
        color: #000;
    }
    
    #nav #logo_url {
        margin: auto;
        margin-left: 0;
        
    }

    #logo {
        width: 130px;
        height: 80px;
    }
</style>