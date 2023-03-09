<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);
export default {
  props: {
    Nombres: String,
    Apellidos: String,
    Correo: String,
    Contrasenia: String,
    TelefonoContacto: String,
    DNI: String,
    Tipo: String,
  },
  methods: {
    eliminarUsuario() {
      //función eliminar solicitud
    },
    eliminarUsuarioButton() {
      alert("Se ha eliminado el usuario con éxito.");
      this.eliminarUsuario();
    },
  },
};
</script>
<template>
  <div class="bg-dark p-5 position-relative">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
      >
        <div class="text-center user-icon-perfil">
          <img
            src="../assets/images/user.png"
            alt="Foto de perfil"
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
              Nombres:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ Nombres }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Apellidos:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ Apellidos }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Correo:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ Correo }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Contraseña:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ Contrasenia }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Teléfono de contacto:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ TelefonoContacto }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              DNI:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ DNI }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute end-0 top-0 button__box p-4 d-flex flex-row">
      <button
        type="button"
        class="button button--eliminar ps-2 bg-transparent border-0"
        v-on:click="eliminarUsuarioButton"
      >
        <font-awesome-icon icon="fa-solid fa-trash" class="fs-4" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.user-icon-perfil {
  max-width: 15rem;
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
