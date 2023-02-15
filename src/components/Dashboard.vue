<template>
    <div class="container-links">
        <div v-for="link in links" class="link"  :key="link.id">
            <a :href="link.url" target="_blank">
                <h3>{{ link.title }}</h3> 
            </a>
            <p>- {{ link.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            links: []
        };
    },
    mounted() {
        this.fetchLinks();
    },
    methods: {
        async fetchLinks() {
            const req = await fetch("http://localhost:3000/links");
            const links = await req.json();
            this.links = links;
        }
    }
};
</script>

<style scoped>
    .container-links {
        display: inline-flex;
        margin: 0 auto;
        flex-direction: revert;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
    }
    
    .link {
        margin: 15px;
        padding: 20px;
        border: 3px solid #5E17EB;
        border-radius: 15px;
        width: 360px;
        height: auto;
        display: flex;
        align-content: space-between;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    h3 {
        color: red;
        border-left: 5px solid red;
        padding-left: 10px;
        margin-bottom: 3px;
        font-size: 35px;
        transition: .5s;
    }
    
    h3:hover {
        border-left: none;
        color: #5E17EB;
        border-bottom: 5px solid #5E17EB;
        padding-left: 5px;
        margin-bottom: 3px;
        font-size: 35px;
        text-align: center;
        transition: .5s;
    }
    
    a {
        font-size: 18px;
        text-decoration: none;
    }
    
    p {
        margin-top: 5px;
        font-size: 18px;
        font-weight: 100;
        right: 100%;
        width: 100%;
        text-align: right;
    }
    
    /* Dispositivos com largura de 320px */
    @media only screen and (max-width: 425px) {
        .link {
            margin: 5px;
            padding: 10px;
            border-width: 2px;
            border-radius: 10px;
            width: 100%;
            height: auto;
            display: flex;
            align-content: space-between;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        h3 {
            font-size: 22px;
        }
        
        a {
            font-size: 14px;
        }
        
        p {
            font-size: 14px;
        }
    }
  </style>