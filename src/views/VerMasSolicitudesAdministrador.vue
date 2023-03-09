<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      nombrePerfil: "",
      correoPerfil: "",
      contraseniaPerfil: "",
      pinPerfil: "",
      solicitud: JSON.parse(this.$route.params.solicitud),
      isModalContainerShow: false,
    };
  },
  methods: {
    mostrarModal() {
      this.isModalContainerShow = true;
    },
    cerrarModal() {
      this.isModalContainerShow = false;
    },
    async eliminarSolicitud() {
      let api = "http://localhost:8080/solicitud/eliminar/" + this.solicitud.id;
      await axios.get(api).then(
        (response) => {
          let verificador = response.data;
          alert(verificador.message);
          if (verificador.estado === "200") {
            cerrarModal();
            this.$router.push("/solicitudesadministrador");
          }
        },
        (error) => {
          alert(error);
        }
      );
    },
    async aprobarSolicitud() {
      let params = {
        nombrePerfil: this.nombrePerfil,
        correoPerfil: this.correoPerfil,
        contraseniaPerfil: this.contraseniaPerfil,
        pinPerfil: this.pinPerfil,
        idSolicitud: this.solicitud.id,
      };
      await axios.post("http://localhost:8080/perfil/aprobar", params).then(
        (response) => {
          let verificador = response.data;
          alert(verificador.mensaje);
          if (verificador.codigo === "200") {
            cerrarModal();
            this.$router.push("/solicitudesadministrador");
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
  <div class="vermassolicitudesadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center p-0 lh-base text-uppercase m-0">
        Solicitudes
      </h1>
    </div>
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="bg-dark p-5">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
          >
            <div class="text-center user-icon-perfil">
              <img
                src="../assets/images/queja.png"
                alt="Foto de solicitud"
                class="w-100 pb-2"
              />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-8 d-flex align-items-center">
            <div class="w-100">
              <div class="row">
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 fw-semibold lh-base my-auto"
                >
                  Cliente:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitud.usuario }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 fw-semibold lh-base my-auto"
                >
                  Plataforma:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
                >
                  {{ solicitud.plataforma }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 fw-semibold lh-base my-auto"
                >
                  Fecha de inicio:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitud.fechaInicioSolicitud }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 fw-semibold lh-base my-auto"
                >
                  Fecha fin:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitud.fechaFinSolicitud }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 fw-semibold lh-base my-auto"
                >
                  Código de pago:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitud.codigoPago }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center justify-content-center flex-wrap">
          <button
            type="button"
            id="button--aceptar"
            v-on:click="mostrarModal"
            class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
          >
            Aceptar solicitud
          </button>
          <button
            type="button"
            v-on:click="eliminarSolicitud"
            class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
          >
            Eliminar solicitud
          </button>
          <router-link to="/solicitudesadministrador" class="atras-button p-0">
            <button
              type="button"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            >
              Atrás
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div
    class="modalContainer"
    id="ventanaRegistroPerfil"
    :class="{ 'modalContainer--show': isModalContainerShow }"
  >
    <div class="ventanaModalPublicacion">
      <div class="bg-black rounded-4">
        <div class="formulario p-5 rounded-4 w-100">
          <form @submit.prevent="aprobarSolicitud" class="d-flex flex-column">
            <h1
              class="text-white fs-1 text-center lh-base pb-3 m-0 fw-bold text-uppercase"
            >
              Registrar perfil
            </h1>
            <div class="row">
              <div class="col-12 col-md-6">
                <label
                  for="correoRegistroPerfil"
                  class="text-white fs-5 text-start lh-base py-3 d-block"
                  >Correo</label
                >
                <input
                  type="email"
                  id="correoRegistroPerfil"
                  name="correoRegistroPerfil"
                  v-model="correoPerfil"
                  class="formulario__input border-0 rounded-pill py-2 px-3 d-block w-100"
                  required
                />
                <label
                  for="contraseniaRegistroPerfil"
                  class="text-white fs-5 text-start lh-base py-3 d-block"
                  >Contraseña</label
                >
                <input
                  type="password"
                  id="contraseniaRegistroPerfil"
                  name="contraseniaRegistroPerfil"
                  v-model="contraseniaPerfil"
                  class="formulario__input border-0 rounded-pill py-2 px-3 d-block w-100"
                  required
                />
              </div>
              <div class="col-12 col-md-6">
                <label
                  for="perfilRegistroPerfil"
                  class="text-white fs-5 text-start lh-base py-3 d-block"
                  >Perfil</label
                >
                <input
                  type="text"
                  id="perfilRegistroPerfil"
                  name="perfilRegistroPerfil"
                  v-model="nombrePerfil"
                  class="formulario__input border-0 rounded-pill py-2 px-3 d-block w-100"
                  required
                />
                <label
                  for="PIN"
                  class="text-white fs-5 text-start lh-base py-3 d-block"
                  >PIN</label
                >
                <input
                  type="password"
                  id="PIN"
                  name="PIN"
                  v-model="pinPerfil"
                  class="formulario__input border-0 rounded-pill py-2 px-3 d-block w-100"
                  required
                />
              </div>
            </div>
            <div class="row text-center justify-content-center flex-wrap">
              <input
                type="submit"
                value="Guardar"
                class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
              />
              <button
                type="button"
                id="button--cerrar"
                class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
                v-on:click="cerrarModal"
              >
                Cerrar
              </button>
            </div>
          </form>
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
  max-width: 50rem;
}
.user-icon-perfil {
  max-width: 15rem;
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
.atras-button {
  width: fit-content;
}
/*VENTANA MODAL*/
.modalContainer {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #111111bd;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s 0.6s;
  --transform: translateY(-100vh);
  --transition: transform 0.5s;
}
.modalContainer--show {
  opacity: 1;
  pointer-events: unset;
  transition: opacity 0.3s;
  --transform: translateY(0);
  --transition: transform 0.5s 0.5s;
}
.ventanaModalPublicacion {
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.7);
  width: fit-content;
  height: fit-content;
  transform: var(--transform);
  transition: var(--transition);
}
</style>
