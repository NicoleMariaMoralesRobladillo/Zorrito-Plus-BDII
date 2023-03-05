<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ingresarquejausuario",
  data: () => {
    return {
      queja: {
        TipoQueja: "Cuenta",
        ComentarioQueja: "",
      },
    };
  },
  methods: {
    agregarQueja() {
      //función agregar Queja
      alert("Se ha enviado la queja con éxito.");
      this.$refs.formularioQueja.reset();
    },
  },
});
</script>
<template>
  <div class="ingresarquejausuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="bg-dark p-5 panel-queja mx-auto">
        <form ref="formularioQueja" @submit.prevent="agregarQueja">
          <h1
            class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0"
          >
            Ingresar queja
          </h1>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-queja__text my-auto"
            >
              Nombres del solicitante:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              a
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-queja__text my-auto"
            >
              Apellidos del solicitante:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              a
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-queja__text my-auto"
            >
              Teléfono de contacto:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              a
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-queja__text my-auto"
            >
              DNI:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              a
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-queja__text my-auto"
            >
              Tipo de queja:
            </div>
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base text-white my-auto"
            >
              <select
                class="form-select text-black fs-5 w-100"
                aria-label="Default select example"
                v-model="queja.TipoQueja"
              >
                <option selected class="text-black fs-5">Cuenta</option>
                <option value="Demora" class="text-black fs-5">Demora</option>
                <option value="Queja" class="text-black fs-5">Externa</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="fechaInicio"
                class="fs-5 py-2 fw-semibold lh-base panel-queja__text"
                >Comentario:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <textarea
                name="fechaInicio"
                id="fechaInicio"
                cols="30"
                rows="5"
                class="border-0 rounded-2 py-2 px-3 w-100 text-break"
                v-model="queja.ComentarioQueja"
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
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.panel-queja {
  max-width: 55rem;
  box-shadow: -20px 20px 30px #ce47f054;
}
.panel-queja__text {
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
