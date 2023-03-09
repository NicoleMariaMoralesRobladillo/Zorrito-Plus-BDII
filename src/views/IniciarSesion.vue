<script>
import { defineComponent } from "vue";
import setAuthHeader from "@/services/setAuthHeader";
import axios from "axios";
export default defineComponent({
  name: "iniciarsesion",
  data: () => {
    return {
      usuarioIniciarSesion: {
        correo: "",
        contrasenia: "",
      },
    };
  },
  methods: {
    async iniciarSesion() {
      let params = {
        correo: this.usuarioIniciarSesion.correo,
        contrasenia: this.usuarioIniciarSesion.contrasenia,
      };
      await axios.post("http://localhost:8080/login", params).then(
        (response) => {
          let verificador = response.data;
          alert(verificador.mensaje);
          if (verificador.codigo === "200") {
            localStorage.setItem("token", JSON.stringify(verificador.token));
            setAuthHeader(verificador.token);
            if (verificador.usuarioDTO.rol == "CLIENTE") {
              this.$router.push("/misperfilesusuario");
            } else if (verificador.usuarioDTO.rol == "ADMINISTRADOR") {
              this.$router.push("/solicitudesadministrador");
            }
          }
        },
        (error) => {
          alert("El usuario no existe. Vuelva a intentarlo.");
        }
      );
    },
  },
});
</script>
<template>
  <div class="iniciarsesion px-4">
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
              class="d-flex flex-column"
              method="post"
              @submit.prevent="iniciarSesion"
            >
              <h1
                class="text-white fs-1 text-center lh-base pb-3 m-0 fw-bold text-uppercase"
              >
                Iniciar sesión
              </h1>
              <img
                src="../assets/images/user.png"
                alt="Ícono de usuario"
                class="py-3 user-icon m-auto w-100"
              />
              <label
                for="correoIniciarSesion"
                class="text-white fs-5 text-start lh-base py-3"
                >Correo</label
              >
              <input
                type="email"
                id="correoIniciarSesion"
                name="correoIniciarSesion"
                v-model="usuarioIniciarSesion.correo"
                class="formulario__input border-0 rounded-pill py-2 px-3"
                required
              />
              <label
                for="contraseniaIniciarSesion"
                class="text-white fs-5 text-start lh-base py-3"
                >Contraseña</label
              >
              <input
                type="password"
                id="contraseniaIniciarSesion"
                name="contraseniaIniciarSesion"
                v-model="usuarioIniciarSesion.contrasenia"
                class="formulario__input border-0 rounded-pill py-2 px-3"
                required
              />
              <input
                type="submit"
                value="Iniciar sesión"
                class="mt-4 mb-3 formulario__button mx-auto text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100"
              />
              <p class="text-white fs-5 text-center lh-base pb-2 m-0">
                ¿No tienes una cuenta?
              </p>
              <router-link
                to="/registrate"
                class="fs-5 text-center lh-base pb-2 formulario__link"
                >Regístrate
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
.user-icon {
  max-width: 10rem;
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
