<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "editarinformacionusuario",
  data() {
    return {
      miInformacionUsuario: JSON.parse(this.$route.params.miInformacionUsuario),
    };
  },
  methods: {
    async editarMiInformacionUsuario() {
      let params = {
        id: this.miInformacionUsuario.id,
        nombre: this.miInformacionUsuario.nombre,
        apellido: this.miInformacionUsuario.apellido,
        celular: this.miInformacionUsuario.celular,
        correo: this.miInformacionUsuario.correo,
        dni: this.miInformacionUsuario.dni,
        contrasenia: this.miInformacionUsuario.contrasenia,
      };
      let formularioInformacionUsuario = document.getElementById(
        "formularioInformacionUsuario"
      );
      await axios.post("http://localhost:8080/usuario/editar", params).then(
        (response) => {
          let verificador = response.data;
          alert(verificador.mensaje);
          if (verificador.codigo === "200") {
            formularioInformacionUsuario.reset();
          }
        },
        (error) => {
          alert(error);
        }
      );
    },
  },
});
</script>
<template>
  <div class="editarinformacionusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="bg-dark p-5 panel-mi-informacion-usuario mx-auto">
        <form
          id="formularioInformacionUsuario"
          @submit.prevent="editarMiInformacionUsuario"
        >
          <h1
            class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0"
          >
            Editar perfil
          </h1>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="nombre"
                class="fs-5 py-2 fw-semibold lh-base panel-mi-informacion-usuario__text"
                >Nombre:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="text"
                id="nombre"
                name="nombre"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="miInformacionUsuario.nombre"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="apellido"
                class="fs-5 py-2 fw-semibold lh-base panel-mi-informacion-usuario__text"
                >Apellido:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="text"
                id="apellido"
                name="apellido"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="miInformacionUsuario.apellido"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="celular"
                class="fs-5 py-2 fw-semibold lh-base panel-mi-informacion-usuario__text"
                >Celular:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="text"
                id="celular"
                name="celular"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="miInformacionUsuario.celular"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="correo"
                class="fs-5 py-2 fw-semibold lh-base panel-mi-informacion-usuario__text"
                >Correo:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="text"
                id="correo"
                name="correo"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="miInformacionUsuario.correo"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="dni"
                class="fs-5 py-2 fw-semibold lh-base panel-mi-informacion-usuario__text"
                >DNI:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="text"
                id="dni"
                name="dni"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="miInformacionUsuario.dni"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="contrasenia"
                class="fs-5 py-2 fw-semibold lh-base panel-mi-informacion-usuario__text"
                >Contraseña:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="text"
                id="contrasenia"
                name="contrasenia"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="miInformacionUsuario.contrasenia"
                required
              />
            </div>
          </div>
          <div class="row text-center justify-content-center flex-wrap">
            <input
              type="submit"
              value="Enviar"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            />
            <input
              type="reset"
              value="Limpiar"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            />
            <router-link
              to="/miinformacionusuario"
              class="formulario__button--atras"
            >
              <button
                type="button"
                class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
              >
                Atrás
              </button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.panel-mi-informacion-usuario {
  max-width: 55rem;
  box-shadow: -20px 20px 30px #ce47f054;
  &__text {
    color: #ce47f0;
  }
}
.formulario__button {
  max-width: fit-content;
  background-color: #182275;
  white-space: normal;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
  &--atras {
    display: contents;
  }
}
</style>
