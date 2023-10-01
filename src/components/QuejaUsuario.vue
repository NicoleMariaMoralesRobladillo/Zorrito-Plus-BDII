<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPenToSquare);
import axios from "axios";
export default {
  props: {
    id: Number,
    comentario: String,
    idTipoQueja: Number,
    nombreTipoQueja: String,
  },
  methods: {
    async eliminarQueja() {
      let api =
        "http://www.grupo4.tech:8080/ZP/quejas/eliminarBD/" + this.$props.id;
      await axios.get(api).then(
        (response) => {
          let verificador = response.data;
          alert(verificador.mensaje);
          if (verificador.codigo === "200") {
            window.location.reload();
          }
        },
        (error) => {
          alert(error);
        }
      );
    },
  },
};
</script>
<template>
  <div class="bg-dark p-5 position-relative queja-card">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
      >
        <div class="text-center queja-icon">
          <img
            src="../assets/images/queja.png"
            alt="Queja"
            class="w-100 pb-2"
          />
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-8 d-flex align-items-center">
        <div class="w-100">
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Tipo de queja:
            </div>
            <div class="col-12 col-md-8 text-white fs-5 py-2 lh-base my-auto">
              {{ nombreTipoQueja }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Comentario:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ comentario }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute end-0 top-0 button__box p-4 d-flex flex-row">
      <router-link
        :to="{
          name: 'editarquejausuario',
          params: {
            queja: JSON.stringify(this.$props),
          },
        }"
        class="nav-link active fs-5 p-0 fw-bold text-uppercase"
      >
        <button
          type="button"
          class="button button--editar pe-2 bg-transparent border-0"
        >
          <font-awesome-icon
            icon="fa-solid fa-pen-to-square"
            class="fs-4"
          /></button
      ></router-link>
      <button
        type="button"
        class="button button--eliminar ps-2 bg-transparent border-0"
        v-on:click="eliminarQueja"
      >
        <font-awesome-icon icon="fa-solid fa-trash" class="fs-4" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.queja {
  &-icon {
    max-width: 15rem;
  }
}
.button {
  color: white;
  &__box {
    width: fit-content;
  }
  &:hover {
    transform: scale(1.1);
  }
  &--eliminar {
    &:hover {
      color: #f84440;
    }
  }
  &--editar {
    &:hover {
      color: greenyellow;
    }
  }
}
</style>
