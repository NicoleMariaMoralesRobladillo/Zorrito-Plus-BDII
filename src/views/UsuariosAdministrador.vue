<script>
import InformacionUsuarioAdministrador from "@/components/InformacionUsuarioAdministrador.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "usuariosadministrador",
  data: () => {
    return {
      usuarios: [
        {
          Nombres: "a",
          Apellidos: "a",
          Correo: "a",
          Contrasenia: "a",
          TelefonoContacto: "a",
          DNI: "a",
          Tipo: "a",
        },
      ],
    };
  },
  components: {
    InformacionUsuarioAdministrador,
  },
  methods: {},
  mounted() {
    //informacion del cliente
  },
});
</script>
<template>
  <div class="usuariosadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Usuarios
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5">
      <InformacionUsuarioAdministrador
        v-for="(usuario, index) in usuarios"
        :key="index"
        :Nombres="usuario.Nombres"
        :Apellidos="usuario.Apellidos"
        :Correo="usuario.Correo"
        :Contrasenia="usuario.Contrasenia"
        :TelefonoContacto="usuario.TelefonoContacto"
        :DNI="usuario.DNI"
        :Tipo="usuario.Tipo"
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
