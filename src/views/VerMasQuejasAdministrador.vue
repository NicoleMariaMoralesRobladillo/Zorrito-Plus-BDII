<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      queja: JSON.parse(this.$route.params.queja),
    };
  },
  methods: {
    eliminarQueja() {
      this.$router.push("/quejasadministrador");
      //borrar queja
    },
    eliminarQuejaButton() {
      alert("Se ha resuelto la queja con éxito.");
      this.eliminarQueja();
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
                  class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
                >
                  Tipo de queja:
                </div>
                <div
                  class="col-12 col-md-8 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ queja.TipoQueja }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-4 fs-5 py-2 fw-semibold lh-base my-auto text-white"
                >
                  Comentario:
                </div>
                <div
                  class="col-12 col-md-8 text-white fs-5 py-2 text-break lh-base my-auto"
                >
                  {{ queja.ComentarioQueja }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center justify-content-center flex-wrap">
          <button
            type="button"
            v-on:click="eliminarQuejaButton"
            class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
          >
            Queja resuelta
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
