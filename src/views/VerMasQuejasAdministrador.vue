<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      queja: JSON.parse(this.$route.params.queja),
    };
  },
  methods: {
    async eliminarQueja() {
      let api = "http://localhost:8080/quejas/eliminarBD/" + this.queja.id;
      await axios.get(api).then(
        (response) => {
          let verificador = response.data;
          alert(verificador.mensaje);
          if (verificador.codigo === "200") {
            this.$router.push("/quejasadministrador");
          }
        },
        (error) => {
          alert(error);
        }
      );
    },
    async atenderQueja() {
      let api = "http://localhost:8080/quejas/atenderQueja/" + this.queja.id;
      await axios.get(api).then(
        (response) => {
          let verificador = response.data;
          alert(verificador.mensaje);
          if (verificador.codigo === "200") {
            this.$router.push("/quejasadministrador");
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
  <div class="vermasquejasadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center p-0 lh-base text-uppercase m-0">
        Quejas
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
                alt="Foto de queja"
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
                  {{ queja.usuario }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 fw-semibold lh-base my-auto"
                >
                  Tipo de queja:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
                >
                  {{ queja.nombreTipoQueja }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 fw-semibold lh-base my-auto"
                >
                  Comentario:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ queja.comentario }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 fw-semibold lh-base my-auto"
                >
                  Estado:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ queja.estado }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center justify-content-center flex-wrap">
          <button
            type="button"
            id="button--aceptar"
            v-on:click="atenderQueja"
            class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
          >
            Atender queja
          </button>
          <button
            type="button"
            v-on:click="eliminarQueja"
            class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
          >
            Eliminar queja
          </button>
          <router-link to="/quejasadministrador" class="atras-button p-0">
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
</style>
