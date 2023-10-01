<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);
import axios from "axios";
export default {
  props: {
    id: Number,
    nombrePerfil: String,
    plataformaPerfil: String,
    correoPerfil: String,
    contraseniaPerfil: String,
    pinPerfil: String,
    idSolicitud: Number,
    fechaInicio: String,
    fechaFin: String,
    usuario: String,
  },
  methods: {
    async eliminarPerfil() {
      let api =
        "http://www.grupo4.tech:8080/ZP/perfil/eliminarBD/" + this.$props.id;
      await axios.delete(api).then(
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
  <div class="bg-dark p-5 position-relative perfil-card">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
      >
        <div class="text-center perfil-icon">
          <img
            src="../assets/images/user.png"
            alt="Perfil"
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
              Cliente:
            </div>
            <div class="col-12 col-md-8 text-white fs-5 py-2 lh-base my-auto">
              {{ usuario }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Perfil:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ nombrePerfil }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Plataforma:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ plataformaPerfil }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Correo:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ correoPerfil }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Contraseña:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ contraseniaPerfil }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Fecha de inicio:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ fechaInicio }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Fecha fin:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ fechaFin }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              PIN:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ pinPerfil }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute end-0 top-0 button__box p-4 d-flex flex-row">
      <button
        type="button"
        class="button button--eliminar ps-2 bg-transparent border-0"
        v-on:click="eliminarPerfil"
      >
        <font-awesome-icon icon="fa-solid fa-trash" class="fs-4" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.perfil {
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
