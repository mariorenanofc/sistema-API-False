<template>
    <div>
        <form action="" id="link-form" @submit.prevent="createLink">
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
                <button @click="showAlert()" type="submit">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  name: 'LinkForm',
  data() {
    return {
      // Dados no singular
      title: null,
      url: null,
      name: null,

      // Dados no plural
      titles: null,
      urls: null,
      names: null
    }
  },
  methods: {
    // Validar os campos antes do envio
    validateFields() {
      let isValid = true;
      if (!this.title) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, preencha o título do artigo',
        });
        isValid = false;
      }
      if (!this.url) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, preencha o link do artigo',
        });
        isValid = false;
      }
      if (!this.name) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, preencha seu nome',
        });
        isValid = false;
      }
      return isValid;
    },

    //Mensagem de envio
    async showAlert() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Obrigado por contribuir!',
        showConfirmButton: false,
        timer: 5000
      });
    },

    // Enviando dados para o backend
    async createLink() {
      if (!this.validateFields()) {
        return;
      }

      const data = {
        url: this.url,
        title: this.title,
        name: this.name,
        status: 'Enviados'
      }

      try {
        const response = await axios.post('http://localhost:3000/links', data);
        if (response.status === 201) {
          this.showAlert();
          this.title = '';
          this.url = '';
          this.name = '';
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocorreu um erro ao enviar o formulário, tente novamente mais tarde',
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro ao enviar o formulário, tente novamente mais tarde',
        });
      }
    },
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

/* Dispositivos com tela de 320px */ 
@media screen and (max-width: 425px) {
  #link-form {
    max-width: 100%;
  }

  input {
    font-size: 14px;
  }

  button {
    font-size: 24px;
  }
}
</style>