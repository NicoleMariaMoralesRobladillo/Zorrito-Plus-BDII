<script>
import InformacionUsuario from "@/components/InformacionUsuario.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "miinformacionusuario",
  data: () => {
    return {
      Nombres: "a",
      Apellidos: "a",
      Correo: "a",
      Contrasenia: "a",
      TelefonoContacto: "a",
      DNI: "a",
      Tipo: "a",
    };
  },
  components: {
    InformacionUsuario,
  },
  methods: {},
  mounted() {
    //informacion del cliente
  },
});
</script>
<template>
  <div class="miinformacionusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Mi información
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5">
      <InformacionUsuario
        :Nombres="Nombres"
        :Apellidos="Apellidos"
        :Correo="Correo"
        :Contrasenia="Contrasenia"
        :TelefonoContacto="TelefonoContacto"
        :DNI="DNI"
        :Tipo="Tipo"
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
