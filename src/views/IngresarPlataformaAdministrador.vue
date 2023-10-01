<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "ingresarplataformaadministrador",
  data: () => {
    return {
      plataforma: {
        nombrePlataforma: "",
        precioPlataforma: null,
      },
    };
  },
  methods: {
    async ingresarPlataforma() {
      let params = {
        nombrePlataforma: this.plataforma.nombrePlataforma,
        precioPlataforma: this.plataforma.precioPlataforma,
      };
      let formularioPlataforma = document.getElementById(
        "formularioPlataforma"
      );
      await axios
        .post("http://www.grupo4.tech:8080/ZP/plataforma/registrar", params)
        .then(
          (response) => {
            let verificador = response.data;
            alert(verificador.mensaje);
            if (verificador.codigo === "200") {
              formularioPlataforma.reset();
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
  <div class="ingresarplataformaadministrador">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="bg-dark p-5 panel-solicitar-plataforma mx-auto">
        <form id="formularioPlataforma" @submit.prevent="ingresarPlataforma">
          <h1
            class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0"
          >
            Ingresar plataforma
          </h1>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="nombrePlataforma"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-plataforma__text"
                >Nombre:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="text"
                id="nombrePlataforma"
                name="nombrePlataforma"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="plataforma.nombrePlataforma"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="precioPlataforma"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-plataforma__text"
                >Precio:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="number"
                step="any"
                min="1"
                id="precioPlataforma"
                name="precioPlataforma"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model.number="plataforma.precioPlataforma"
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
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.panel-solicitar-plataforma {
  max-width: 55rem;
  box-shadow: -20px 20px 30px #ce47f054;
}
.panel-solicitar-plataforma__text {
  color: #ce47f0;
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
</style>
