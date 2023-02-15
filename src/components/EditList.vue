<template>
    <div class="container-list">
      <div class="list-change" v-for="link in links" :key="link.id">
        <div class="order-id">{{ link.id }}</div>
        <a :href="link.url" target="_blank">
          <h3>{{ link.title }}</h3>
          {{ link.url }}
        </a>
        <p>{{ link.name }}</p>
        <div>
          <button @click="editList(link)" class="btn-edit">Editar</button>
          <button @click="deleteList(link.id)" class="btn-delete">Deletar</button>
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

    // Deletar os links adicionados
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
            const req = await fetch(`http://localhost:3000/links/${id}`, {
                method: "DELETE"
            });

            const res = await req.json();

            //msg

            this.fetchLinks();
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

          const req = await fetch(`http://localhost:3000/links/${link.id}`, {
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

</style>