<script>
import PerfilUsuario from "@/components/PerfilUsuario.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "misperfilesusuario",
  data: () => {
    return {
      misPerfiles: [],
    };
  },
  components: {
    PerfilUsuario,
  },
  methods: {
    async getMisPerfiles() {
      await axios.get("http://localhost:8080/perfil/user").then((response) => {
        this.misPerfiles = response.data;
      });
    },
  },
  mounted() {
    this.getMisPerfiles();
  },
});
</script>
<template>
  <div class="misperfilesusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Mis perfiles
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5" v-if="misPerfiles.length != 0">
      <PerfilUsuario
        v-for="(miPerfil, index) in misPerfiles"
        :key="index"
        :nombrePerfil="miPerfil.nombrePerfil"
        :plataformaPerfil="miPerfil.plataformaPerfil"
        :correoPerfil="miPerfil.correoPerfil"
        :contraseniaPerfil="miPerfil.contraseniaPerfil"
        :fechaInicio="miPerfil.fechaInicio"
        :fechaFin="miPerfil.fechaFin"
        :pinPerfil="miPerfil.pinPerfil"
        class="my-5"
      />
    </div>
  </div>
</template>
