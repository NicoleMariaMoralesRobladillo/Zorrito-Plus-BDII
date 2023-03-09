<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "editarquejausuario",
  data() {
    return {
      queja: JSON.parse(this.$route.params.queja),
      tiposQueja: [],
    };
  },
  methods: {
    async getTiposQueja() {
      await axios.get("http://localhost:8080/quejas/tipos").then((response) => {
        this.tiposQueja = response.data;
      });
    },
    async editarQueja() {
      let params = {
        id: this.queja.id,
        comentario: this.queja.comentario,
        idTipoQueja: this.queja.idTipoQueja,
      };
      let formularioQueja = document.getElementById("formularioQueja");
      await axios.post("http://localhost:8080/quejas/editarQueja", params).then(
        (response) => {
          let verificador = response.data;
          alert(verificador.mensaje);
          if (verificador.codigo === "200") {
            formularioQueja.reset();
          }
        },
        (error) => {
          alert(error);
        }
      );
    },
  },
  created() {
    this.getTiposQueja();
  },
});
</script>
<template>
  <div class="editarquejausuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="bg-dark p-5 panel-solicitar-queja mx-auto">
        <form id="formularioQueja" @submit.prevent="editarQueja">
          <h1
            class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0"
          >
            Editar queja
          </h1>
          <div class="row">
            <div
              class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base panel-solicitar-queja__text my-auto"
            >
              Tipo de queja:
            </div>
            <div
              class="col-12 col-md-8 fs-5 py-2 fw-semibold lh-base text-white my-auto"
            >
              <select
                class="form-select text-black fs-5 w-100"
                aria-label="Default select example"
                v-model.number="queja.idTipoQueja"
              >
                <option
                  v-for="tipoQueja in tiposQueja"
                  :value="tipoQueja.id"
                  class="text-black fs-5"
                >
                  {{ tipoQueja.escalaQueja }}
                </option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 my-auto">
              <label
                for="comentario"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-queja__text"
                >Comentario:</label
              >
            </div>
            <div class="col-12 col-md-8 text-white fs-5 py-2 lh-base my-auto">
              <textarea
                name="comentario"
                id="comentario"
                cols="30"
                rows="5"
                class="border-0 rounded-2 py-2 px-3 w-100 text-break"
                v-model="queja.comentario"
                required
              ></textarea>
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
              to="/misquejasusuario"
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
.panel-solicitar-queja {
  max-width: 55rem;
  box-shadow: -20px 20px 30px #ce47f054;
}
.panel-solicitar-queja__text {
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
  &--atras {
    display: contents;
  }
}
</style>
