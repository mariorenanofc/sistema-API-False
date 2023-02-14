<template>
    <div class="container-links">
        <ul v-if="links.length">
            <li v-for="link in links" >
                <h3>Título: {{ link.title }}</h3>
                <a>URL: {{ link.url }}</a>
                <p>Nome: {{ link.name }}</p>
            </li>
        </ul>
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
            const req = await fetch("http://localhost:3000/salvos");
            const links = await req.json();
            this.links = links;
        }
    }
};
</script>

<style scoped>
    .container-links {
        display: flexbox;
        position: inherit;
    }

    ul li {
        max-width: 450px;
        margin: 20px;
        padding: 30px;
        border: 3px solid #5E17EB;
    }
</style>