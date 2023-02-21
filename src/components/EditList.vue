<template>
  <div class="container-list">
    <div class="list-change" v-for="link in links" :key="link.id">
      <div class="order-id">{{ link.id }}</div>
      <a :href="link.url" target="_blank">
        <h3>{{ link.title }}</h3>
        <p>{{ link.url }}</p>
      </a>
      <p>{{ link.name }}</p>
      <div class="button-container">
        <button @click="editList(link)" class="btn-edit">Editar</button>
        <button @click="deleteList(link._id)" class="btn-delete">Deletar</button>
      </div>
    </div>
  </div>
</template>


<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      links: []
    };
  },
  mounted() {
    this.fetchLinks();
  },
  methods: {
    // Listar todos os links hospedados
    async fetchLinks() {
      const req = await fetch("http://localhost:3000/links");
      const links = await req.json();
      this.links = links;
    },

    async deleteList(id) {
      const confirmResult = await Swal.fire({
        title: 'Você tem certeza?',
        text: 'O link selecionado será deletado.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar',
        cancelButtonText: 'Cancelar'
      });

      if (confirmResult.isConfirmed) {
        try {
          const req = await fetch(`http://localhost:3000/links/${id}`, {
            method: "DELETE"
          });

          const res = await req.json();

          // Notificação de sucesso
          if (res.message === 'Link deleted successfully') {
            await Swal.fire({
              title: 'Deletado com sucesso!',
              icon: 'success'
            });
          }

          this.fetchLinks();
        } catch (error) {
          console.log(error);
        }
      }
    }
    ,

    // Editar Links adicionados
    async editList(link) {
      try {
        const { value: formValues } = await Swal.fire({
          title: 'Editar link',
          html: `
            <input id="title" class="swal2-input" value="${link.title}" placeholder="Titulo">
            <input id="url" class="swal2-input" value="${link.url}" placeholder="Link do  Titulo">
            <input id="name" class="swal2-input" value="${link.name}" placeholder="Seu nome">
          `,
          focusConfirm: false,
          preConfirm: () => {
            const title = Swal.getPopup().querySelector('#title').value;
            const url = Swal.getPopup().querySelector('#url').value;
            const name = Swal.getPopup().querySelector('#name').value;
            if (!title || !url || !name) {
              Swal.showValidationMessage(`Preencha todos os campos`);
            }
            return { title, url, name };
          }
        });

        if (formValues) {
          const dataJson = JSON.stringify({
            title: formValues.title,
            url: formValues.url,
            name: formValues.name
          });

          const req = await fetch(`http://localhost:3000/links/${link._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: dataJson
          });

          const res = await req.json();
          console.log(res);

          if (res.error) {
            await Swal.fire('Erro', res.error, 'error');
          } else {
            await Swal.fire('Alterado com sucesso!', '', 'success');
            this.fetchLinks();
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.container-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.list-change {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.order-id {
  font-weight: bold;
  color: #5E17EB;
  font-size: 20px;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #222;
  margin-bottom: 10px;
  width: 100%;
}

h3 {
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: bold;
  color: #5E17EB;
}

p {
  margin: 0;
  font-size: 14px;
  color: #5E17EB;
}

.description {
  margin-bottom: 10px;
  font-size: 16px;
  color: #222;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
}

button {
  background-color: #5E17EB;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-edit {
  background-color: #a274ff;
  margin-right: 10px;
}

.btn-delete {
  background-color: #ff6666;
}

button:hover {
  background-color: #4e148c;
}

/* media query para dispositivos móveis */
@media (max-width: 425px) {
  .container-list {
    padding: 10px;
  }

  .list-change {
    padding: 10px;
  }

  .order-id {
    font-size: 16px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 10px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  button {
    margin-top: 10px;
    margin-left: 2px;
    padding: 8px;
    font-size: 14px;
  }

  .btn-edit {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>