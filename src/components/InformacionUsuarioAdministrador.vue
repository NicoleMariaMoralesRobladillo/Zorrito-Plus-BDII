<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);
import axios from "axios";
export default {
  props: {
    id: Number,
    nombre: String,
    apellido: String,
    celular: String,
    correo: String,
    dni: String,
    contrasenia: String,
    rol: String,
  },
  methods: {
    async eliminarUsuario() {
      let api = "http://localhost:8080/usuario/delete/" + this.$props.id;
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
  <div class="bg-dark p-5 position-relative usuario-card">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
      >
        <div class="text-center usuario-icon">
          <img
            src="../assets/images/user.png"
            alt="Usuario"
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
              Nombre:
            </div>
            <div class="col-12 col-md-8 text-white fs-5 py-2 lh-base my-auto">
              {{ nombre }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Apellido:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ apellido }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Celular:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ celular }}
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
              {{ correo }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              DNI:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ dni }}
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
              {{ contrasenia }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Rol:
            </div>
            <div
              class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ rol }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute end-0 top-0 button__box p-4 d-flex flex-row">
      <button
        type="button"
        class="button button--eliminar ps-2 bg-transparent border-0"
        v-on:click="eliminarUsuario"
      >
        <font-awesome-icon icon="fa-solid fa-trash" class="fs-4" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.usuario {
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
