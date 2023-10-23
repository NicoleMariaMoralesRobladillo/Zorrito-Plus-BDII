<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "registrate",
  data: () => {
    return {
      nombrePatron: /^[a-zA-ZñÑ\s]{1,50}$/,
      apellidoPatron: /^[a-zA-ZñÑ\s]{1,50}$/,
      celularPatron: /^\d{9}$/,
      correoPatron: /^[^\s@]{1,25}@[a-zA-ZñÑ]{5,19}\.[a-zA-ZñÑ]{2,3}$/,
      dniPatron: /^\d{8}$/,
      mostrarMensajeValidacionNombre: false,
      mostrarMensajeValidacionApellido: false,
      mostrarMensajeValidacionCelular: false,
      mostrarMensajeValidacionCorreo: false,
      mostrarMensajeValidacionDni: false,
      mostrarMensajeValidacionContrasenia: false,
      mensajeValidacionNombre: "",
      mensajeValidacionApellido: "",
      mensajeValidacionCelular: "",
      mensajeValidacionCorreo: "",
      mensajeValidacionDni: "",
      mensajeValidacionContrasenia: "",
      nuevoCliente: {
        nombre: "",
        apellido: "",
        celular: "",
        correo: "",
        dni: "",
        contrasenia: "",
      },
    };
  },
  methods: {
    limpiarMensajesValidacion() {
      this.mostrarMensajeValidacionNombre = false;
      this.mostrarMensajeValidacionApellido = false;
      this.mostrarMensajeValidacionCelular = false;
      this.mostrarMensajeValidacionCorreo = false;
      this.mostrarMensajeValidacionDni = false;
      this.mostrarMensajeValidacionContrasenia = false;
    },
    validarFormulario() {
      this.limpiarMensajesValidacion();
      if (
        this.nuevoCliente.nombre == null ||
        this.nuevoCliente.nombre == "" ||
        new RegExp(/^\s*$/).test(this.nuevoCliente.nombre)
      ) {
        this.mensajeValidacionNombre = "El nombre no debe estar vacío.";
        this.mostrarMensajeValidacionNombre = true;
        return false;
      }
      if (this.nuevoCliente.nombre.length > 50) {
        this.mensajeValidacionNombre =
          "El nombre debe tener hasta 50 caracteres.";
        this.mostrarMensajeValidacionNombre = true;
        return false;
      }
      if (!new RegExp(this.nombrePatron).test(this.nuevoCliente.nombre)) {
        this.mensajeValidacionNombre =
          "El nombre debe tener solo caracteres alfabéticos.";
        this.mostrarMensajeValidacionNombre = true;
        return false;
      }
      if (
        this.nuevoCliente.apellido == null ||
        this.nuevoCliente.apellido == "" ||
        new RegExp(/^\s*$/).test(this.nuevoCliente.apellido)
      ) {
        this.mensajeValidacionApellido = "El apellido no debe estar vacío.";
        this.mostrarMensajeValidacionApellido = true;
        return false;
      }
      if (this.nuevoCliente.apellido.length > 50) {
        this.mensajeValidacionApellido =
          "El apellido debe tener hasta 50 caracteres.";
        this.mostrarMensajeValidacionApellido = true;
        return false;
      }
      if (!new RegExp(this.apellidoPatron).test(this.nuevoCliente.apellido)) {
        this.mensajeValidacionApellido =
          "El apellido debe tener solo caracteres alfabéticos.";
        this.mostrarMensajeValidacionApellido = true;
        return false;
      }
      if (
        this.nuevoCliente.celular == null ||
        this.nuevoCliente.celular == "" ||
        new RegExp(/\s+/).test(this.nuevoCliente.celular)
      ) {
        this.mensajeValidacionCelular =
          "El número de celular no debe estar vacío.";
        this.mostrarMensajeValidacionCelular = true;
        return false;
      }
      if (this.nuevoCliente.celular.length != 9) {
        this.mensajeValidacionCelular =
          "El número de celular debe tener 9 caracteres numéricos.";
        this.mostrarMensajeValidacionCelular = true;
        return false;
      }
      if (!new RegExp(this.celularPatron).test(this.nuevoCliente.celular)) {
        this.mensajeValidacionCelular =
          "El número de celular debe tener solo caracteres numéricos.";
        this.mostrarMensajeValidacionCelular = true;
        return false;
      }
      if (
        this.nuevoCliente.correo == null ||
        this.nuevoCliente.correo == "" ||
        new RegExp(/\s+/).test(this.nuevoCliente.correo)
      ) {
        this.mensajeValidacionCorreo = "El correo no debe estar vacío.";
        this.mostrarMensajeValidacionCorreo = true;
        return false;
      }
      if (this.nuevoCliente.correo.length > 50) {
        this.mensajeValidacionCorreo =
          "El correo no debe tener más de 50 caracteres.";
        this.mostrarMensajeValidacionCorreo = true;
        return false;
      }
      if (!new RegExp(this.correoPatron).test(this.nuevoCliente.correo)) {
        this.mensajeValidacionCorreo = "El correo tiene un formato inválido.";
        this.mostrarMensajeValidacionCorreo = true;
        return false;
      }
      if (
        this.nuevoCliente.dni == null ||
        this.nuevoCliente.dni == "" ||
        new RegExp(/\s+/).test(this.nuevoCliente.dni)
      ) {
        this.mensajeValidacionDni = "El DNI no debe estar vacío.";
        this.mostrarMensajeValidacionDni = true;
        return false;
      }
      if (this.nuevoCliente.dni.length != 8) {
        this.mensajeValidacionDni = "El DNI debe tener 8 caracteres numéricos.";
        this.mostrarMensajeValidacionDni = true;
        return false;
      }
      if (!new RegExp(this.dniPatron).test(this.nuevoCliente.dni)) {
        this.mensajeValidacionDni =
          "El DNI no debe tener un caracter alfabético.";
        this.mostrarMensajeValidacionDni = true;
        return false;
      }
      if (
        this.nuevoCliente.contrasenia == null ||
        this.nuevoCliente.contrasenia == "" ||
        new RegExp(/\s+/).test(this.nuevoCliente.contrasenia)
      ) {
        this.mensajeValidacionContrasenia =
          "La contraseña no debe estar vacía.";
        this.mostrarMensajeValidacionContrasenia = true;
        return false;
      }
      if (this.nuevoCliente.contrasenia.length > 50) {
        this.mensajeValidacionContrasenia =
          "La contraseña no debe tener más de 50 caracteres.";
        this.mostrarMensajeValidacionContrasenia = true;
        return false;
      }
      return true;
    },
    async registrarCliente() {
      if (this.validarFormulario()) {
        let params = {
          nombre: this.nuevoCliente.nombre,
          apellido: this.nuevoCliente.apellido,
          celular: this.nuevoCliente.celular,
          correo: this.nuevoCliente.correo,
          dni: this.nuevoCliente.dni,
          contrasenia: this.nuevoCliente.contrasenia,
        };
        await axios
          .post("http://localhost:8080/usuario/registrar", params)
          .then(
            (response) => {
              let verificador = response.data;
              let formularioRegistrate = document.getElementById(
                "formularioRegistrate"
              );
              alert(verificador.mensaje);
              if (verificador.codigo === "200") {
                formularioRegistrate.reset();
                this.$router.push("/iniciarsesion");
              }
            },
            (error) => {
              alert(error);
            }
          );
      }
    },
  },
});
</script>
<template>
  <div class="registrate px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-6 text-center mt-3 m-md-0 order-1 order-md-0">
          <img
            src="../assets/images/zorrito-animado.png"
            alt="Avatar de zorrito"
            class="zorrito-avatar w-100"
          />
        </div>
        <div
          class="col-12 col-md-6 mb-3 m-md-0 d-flex justify-content-center order-0 order-md-1"
        >
          <div class="formulario p-5 rounded-4 w-100">
            <form
              id="formularioRegistrate"
              class="d-flex flex-column"
              method="post"
              @submit.prevent="registrarCliente"
              novalidate
            >
              <h1
                class="text-white fs-1 text-center lh-base pb-3 m-0 fw-bold text-uppercase"
              >
                Regístrate
              </h1>
              <label
                for="nombreRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Nombre</label
              >
              <input
                type="text"
                id="nombreRegistrate"
                name="nombreRegistrate"
                v-model="nuevoCliente.nombre"
                class="formulario__input border-0 rounded-pill py-2 px-3"
              />
              <div
                id="mensajeValidacionNombre"
                :key="mensajeValidacionNombre"
                class="text-white py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionNombre }"
              >
                {{ mensajeValidacionNombre }}
              </div>
              <label
                for="apellidoRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Apellido</label
              >
              <input
                type="text"
                id="apellidoRegistrate"
                name="apellidoRegistrate"
                v-model="nuevoCliente.apellido"
                class="formulario__input border-0 rounded-pill py-2 px-3"
              />
              <div
                id="mensajeValidacionApellido"
                :key="mensajeValidacionApellido"
                class="text-white py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionApellido }"
              >
                {{ mensajeValidacionApellido }}
              </div>
              <label
                for="celularRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Celular</label
              >
              <input
                type="tel"
                id="celularRegistrate"
                name="celularRegistrate"
                v-model="nuevoCliente.celular"
                class="formulario__input border-0 rounded-pill py-2 px-3"
              />
              <div
                id="mensajeValidacionCelular"
                :key="mensajeValidacionCelular"
                class="text-white py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionCelular }"
              >
                {{ mensajeValidacionCelular }}
              </div>
              <label
                for="correoRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Correo</label
              >
              <input
                type="email"
                id="correoRegistrate"
                name="correoRegistrate"
                v-model="nuevoCliente.correo"
                class="formulario__input border-0 rounded-pill py-2 px-3"
              />
              <div
                id="mensajeValidacionCorreo"
                :key="mensajeValidacionCorreo"
                class="text-white py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionCorreo }"
              >
                {{ mensajeValidacionCorreo }}
              </div>
              <label
                for="dniRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >DNI</label
              >
              <input
                type="text"
                id="dniRegistrate"
                name="dniRegistrate"
                v-model="nuevoCliente.dni"
                class="formulario__input border-0 rounded-pill py-2 px-3"
              />
              <div
                id="mensajeValidacionDni"
                :key="mensajeValidacionDni"
                class="text-white py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionDni }"
              >
                {{ mensajeValidacionDni }}
              </div>
              <label
                for="contraseniaRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Contraseña</label
              >
              <input
                type="password"
                id="contraseniaRegistrate"
                name="contraseniaRegistrate"
                v-model="nuevoCliente.contrasenia"
                class="formulario__input border-0 rounded-pill py-2 px-3"
              />
              <div
                id="mensajeValidacionContrasenia"
                :key="mensajeValidacionContrasenia"
                class="text-white py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionContrasenia }"
              >
                {{ mensajeValidacionContrasenia }}
              </div>
              <input
                id="enviarButton"
                type="submit"
                value="Regístrate"
                class="mt-4 mb-3 formulario__button mx-auto text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100"
              />
              <p class="text-white fs-5 text-center lh-base pb-2 m-0">
                ¿Ya tienes una cuenta?
              </p>
              <router-link
                to="/iniciarsesion"
                class="fs-5 text-center lh-base pb-2 formulario__link"
                >Iniciar sesión
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.formulario {
  background-image: linear-gradient(
    to bottom right,
    #040c51 20%,
    #171e5700 100%
  );
  max-width: 30rem;
}

.formulario__button {
  max-width: fit-content;
  background-color: #182275;
  white-space: normal;

  &:hover,
  &:active {
    transform: scale(1.1);
  }
}

.formulario__link {
  color: #47c0f0;
}

.zorrito-avatar {
  max-width: 30rem !important;
}
</style>
