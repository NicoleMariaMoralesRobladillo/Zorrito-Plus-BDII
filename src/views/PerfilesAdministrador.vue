<script>
import PerfilAdministrador from "@/components/PerfilAdministrador.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "perfilesadministrador",
  data: () => {
    return {
      perfiles: [
        {
          Perfil: "Nicole",
          Plataforma: "Netflix",
          Correo: "moralesrobladillon@gmail.com",
          Contrasenia: "abcd",
          FechaInicio: "15 / 09 / 2022",
          TiempoDuracion: "5",
          PIN: "a",
        },
      ],
    };
  },
  components: {
    PerfilAdministrador,
  },
  mounted() {
    //filtrar perfiles
  },
});
</script>
<template>
  <div class="perfilesadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Perfiles
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5">
      <PerfilAdministrador
        v-for="(perfil, index) in perfiles"
        :key="index"
        :Perfil="perfil.Perfil"
        :Plataforma="perfil.Plataforma"
        :Correo="perfil.Correo"
        :Contrasenia="perfil.Contrasenia"
        :FechaInicio="perfil.FechaInicio"
        :TiempoDuracion="perfil.TiempoDuracion"
        :PIN="perfil.PIN"
        class="my-5"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.form-select--width {
  width: inherit !important;
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
