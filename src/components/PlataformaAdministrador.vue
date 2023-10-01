<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPenToSquare);
import axios from "axios";
export default {
  props: {
    id: Number,
    nombrePlataforma: String,
    precioPlataforma: Number,
    estado: String,
  },
  methods: {
    async eliminarPlataforma() {
      let api =
        "http://www.grupo4.tech:8080/ZP/plataforma/eliminar/" + this.$props.id;
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
  <div class="bg-dark p-5 position-relative plataforma-card">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
      >
        <div class="text-center plataforma-icon">
          <img
            src="../assets/images/queja.png"
            alt="Plataforma"
            class="w-100 pb-2"
          />
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-8 d-flex align-items-center">
        <div class="w-100">
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Nombre:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ nombrePlataforma }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Precio:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ precioPlataforma }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Estado:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ estado }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute end-0 top-0 button__box p-4 d-flex flex-row">
      <router-link
        :to="{
          name: 'editarplataformaadministrador',
          params: {
            plataforma: JSON.stringify(this.$props),
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
        v-on:click="eliminarPlataforma"
      >
        <font-awesome-icon icon="fa-solid fa-trash" class="fs-4" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.plataforma {
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
