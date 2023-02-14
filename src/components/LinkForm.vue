<template>
    <div>
        <form action="" id="link-form" @submit="createLink">
            <div class="input-container">
                <label for="title">Título do Artigo: </label>
                <input type="text" id="title" name="title" v-model="title" placeholder="Digite o Título">
            </div>
            <div class="input-container">
                <label for="url">Link do Artigo: </label>
                <input type="url" id="url" name="url" v-model="url" placeholder="https://example.com.br">
            </div>
            <div class="input-container">
                <label for="name">Seu nome: </label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu nome">
            </div>
            <div class="input-container">
                <button @click="showAlert()">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    
    name: "LinkForm",
    data() {
        return {
            // Dados no singular
            title: null,
            url: null,
            names: null,

            // Dados no plural
            titles: null,
            urls: null,
            names: null
        }
    },
    methods: {

        //Mensagem de envio
        async showAlert() {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Obrigado por contribuir!',
                showAlert: true,
                timer: 5000
            });
        },

        // Enviando dados para o backend

        async createLink(e) {
            e.preventDefault();

            const data = {
                url: this.url,
                title: this.title,
                name: this.name,
                status: "Enviados"
            }

            const dataJson = JSON.stringify(data);

            const req = await fetch("http://localhost:3000/salvos",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: dataJson
                });

            const res = await req.json();

            // Limpar dados dos campos

            this.title = "";
            this.url = "";
            this.name = "";
        },


        // Editando Links


        // Deletar Links 
    }

}



</script>

<style scoped>
#link-form {
    max-width: 600px;
    margin: 0 auto;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #5E17EB;
}

input {
    border-radius: 5px;
    background-color: #a274ff33;
    padding: 5px 10px;
    color: #111;
    border: 2px solid #5E17EB;
}

button {
    width: 100%;
    background-color: #5E17EB;
    padding: 16px;
    font-size: 35px;
    margin: 0 auto;
    color: #fff;
    font-weight: bold;
    border-radius: 0 0 80px 80px;
    border: 2px solid #340298d7;
    cursor: pointer;
    transition: .5s;
}

button:hover {
    background-color: #111;
    padding: 10px;
    font-size: 40px;
    color: #5E17EB;
    font-weight: bold;
    border-radius: 80px;
    margin: 0 auto;
    width: 300px;

}
</style>