<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "registrate",
  data: () => {
    return {
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
    async registrarCliente() {
      let params = {
        nombre: this.nuevoCliente.nombre,
        apellido: this.nuevoCliente.apellido,
        celular: this.nuevoCliente.celular,
        correo: this.nuevoCliente.correo,
        dni: this.nuevoCliente.dni,
        contrasenia: this.nuevoCliente.contrasenia,
      };
      await axios.post("http://localhost:8080/usuario/registrar", params).then(
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
    },
  },
});
</script>
<template>
  <div class="registrate px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-6 text-center mt-3 m-md-0 order-1 order-md-0">
          <img src="../assets/images/zorrito-animado.png" alt="Avatar de zorrito" class="zorrito-avatar w-100" />
        </div>
        <div class="col-12 col-md-6 mb-3 m-md-0 d-flex justify-content-center order-0 order-md-1">
          <div class="formulario p-5 rounded-4 w-100">
            <form id="formularioRegistrate" class="d-flex flex-column" method="post" @submit.prevent="registrarCliente">
              <h1 class="text-white fs-1 text-center lh-base pb-3 m-0 fw-bold text-uppercase">
                Regístrate
              </h1>
              <label for="nombreRegistrate" class="text-white fs-5 text-start lh-base py-3">Nombre</label>
              <input type="text" id="nombreRegistrate" name="nombreRegistrate" v-model="nuevoCliente.nombre"
                class="formulario__input border-0 rounded-pill py-2 px-3" required />
              <label for="apellidoRegistrate" class="text-white fs-5 text-start lh-base py-3">Apellido</label>
              <input type="text" id="apellidoRegistrate" name="apellidoRegistrate" v-model="nuevoCliente.apellido"
                class="formulario__input border-0 rounded-pill py-2 px-3" required />
              <label for="celularRegistrate" class="text-white fs-5 text-start lh-base py-3">Celular</label>
              <input type="tel" id="celularRegistrate" name="celularRegistrate" v-model="nuevoCliente.celular"
                class="formulario__input border-0 rounded-pill py-2 px-3" required />
              <label for="correoRegistrate" class="text-white fs-5 text-start lh-base py-3">Correo</label>
              <input type="email" id="correoRegistrate" name="correoRegistrate" v-model="nuevoCliente.correo"
                class="formulario__input border-0 rounded-pill py-2 px-3" required />
              <label for="dniRegistrate" class="text-white fs-5 text-start lh-base py-3">DNI</label>
              <input type="text" id="dniRegistrate" name="dniRegistrate" v-model="nuevoCliente.dni"
                class="formulario__input border-0 rounded-pill py-2 px-3" required />
              <label for="contraseniaRegistrate" class="text-white fs-5 text-start lh-base py-3">Contraseña</label>
              <input type="password" id="contraseniaRegistrate" name="contraseniaRegistrate"
                v-model="nuevoCliente.contrasenia" class="formulario__input border-0 rounded-pill py-2 px-3" required />
              <input type="submit" value="Regístrate"
                class="mt-4 mb-3 formulario__button mx-auto text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100" />
              <p class="text-white fs-5 text-center lh-base pb-2 m-0">
                ¿Ya tienes una cuenta?
              </p>
              <router-link to="/iniciarsesion" class="fs-5 text-center lh-base pb-2 formulario__link">Iniciar sesión
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
  background-image: linear-gradient(to bottom right,
      #040c51 20%,
      #171e5700 100%);
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