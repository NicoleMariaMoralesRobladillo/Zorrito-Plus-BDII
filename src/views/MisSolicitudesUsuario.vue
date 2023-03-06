<script>
import SolicitudUsuario from "@/components/SolicitudUsuario.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "missolicitudesusuario",
  data: () => {
    return {
      misSolicitudes: [
        {
          Plataforma: "Netflix",
          FechaInicio: "a",
          TiempoDuracion: 1,
          CapturaPago: "a",
        },
      ],
    };
  },
  components: {
    SolicitudUsuario,
  },
  methods: {
    //filtrar perfiles por plataforma
  },
  mounted() {
    //filtrar perfiles del usuario
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
        :Plataforma="miSolicitud.Plataforma"
        :FechaInicio="miSolicitud.FechaInicio"
        :TiempoDuracion="miSolicitud.TiempoDuracion"
        :CapturaPago="miSolicitud.CapturaPago"
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
