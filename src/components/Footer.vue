<template>
    <footer id="footer">
        <p>LinkTech &copy; 2023</p>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    #footer {
        height: 100px;
        width: 100%;
        background-color: #5E17EB;
        border-top: 4px solid #211D47;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
    }

    /* Dispositivos com tela de 320px */


    @media (max-width: 425px) {
        #footer {
            height: 50px;
            font-size: 14px;
            position: fixed;
            bottom: 0;
        }
    }
</style>