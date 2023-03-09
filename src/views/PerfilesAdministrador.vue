<script>
import PerfilAdministrador from "@/components/PerfilAdministrador.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "perfilesadministrador",
  data: () => {
    return {
      perfiles: [],
    };
  },
  components: {
    PerfilAdministrador,
  },
  methods: {
    async getPerfiles() {
      await axios.get("http://localhost:8080/perfil/admin").then((response) => {
        this.perfiles = response.data;
      });
    },
  },
  mounted() {
    this.getPerfiles();
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
    <div class="p-0 mx-md-3 mx-lg-5" v-if="perfiles.length != 0">
      <PerfilAdministrador
        v-for="(perfil, index) in perfiles"
        :key="index"
        :id="perfil.id"
        :nombrePerfil="perfil.nombrePerfil"
        :plataformaPerfil="perfil.plataformaPerfil"
        :correoPerfil="perfil.correoPerfil"
        :contraseniaPerfil="perfil.contraseniaPerfil"
        :pinPerfil="perfil.pinPerfil"
        :idSolicitud="perfil.idSolicitud"
        :fechaInicio="perfil.fechaInicio"
        :fechaFin="perfil.fechaFin"
        :usuario="perfil.usuario"
        class="my-5"
      />
    </div>
  </div>
</template>
