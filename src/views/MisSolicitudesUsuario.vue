<script>
import SolicitudUsuario from "@/components/SolicitudUsuario.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "missolicitudesusuario",
  data: () => {
    return {
      misSolicitudes: [],
    };
  },
  components: {
    SolicitudUsuario,
  },
  methods: {
    async getMisSolicitudes() {
      await axios
        .get("http://localhost:8080/solicitud/user")
        .then((response) => {
          this.misSolicitudes = response.data;
        });
    },
  },
  created() {
    this.getMisSolicitudes();
  },
});
</script>
<template>
  <div class="missolicitudesusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Mis solicitudes
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5">
      <SolicitudUsuario
        v-for="(miSolicitud, index) in misSolicitudes"
        :key="index"
        :id="miSolicitud.id"
        :plataforma="miSolicitud.plataforma"
        :idPlataforma="miSolicitud.idPlataforma"
        :fechaInicioSolicitud="miSolicitud.fechaInicioSolicitud"
        :fechaFinSolicitud="miSolicitud.fechaFinSolicitud"
        :codigoPago="miSolicitud.codigoPago"
        class="my-5"
      />
    </div>
  </div>
</template>
