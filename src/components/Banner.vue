<template>
    <div id="main-banner">
        <h4>Encontre ou hospede os melhores site de artigos sobre Tecnológia</h4>
    </div>
</template>

<script>
export default {
    name: "Banner",

}
</script>

<style scoped>
    #main-banner {
        background-image: url('/public/img/banner.jpg');
        background-position: 0 -180px;
        background-size: cover;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    #main-banner h4 {
        background-color: #5e17ebd3;
        color: #fff;
        font-size: 25px;
        padding: 20px;
    }

    /* Estilos específicos para dispositivos com largura de 320px */

    @media only screen and (max-width: 425px) {
        #main-banner {
            height: 150px;
        }

        #main-banner h4 {
            font-size: 20px;
            padding: 10px;
        }
    }
</style>