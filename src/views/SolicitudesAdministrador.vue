<script>
import FilaSolicitud from "@/components/FilaSolicitud.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "solicitudesadministrador",
  data: () => {
    return {
      solicitudes: [],
    };
  },
  components: {
    FilaSolicitud,
  },
  methods: {
    async getSolicitudes() {
      await axios
        .get("http://localhost:8080/solicitud/admin")
        .then((response) => {
          this.solicitudes = response.data;
        });
    },
  },
  created() {
    this.getSolicitudes();
  },
});
</script>
<template>
  <div class="solicitudesadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Solicitudes
      </h1>
    </div>
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <table
        class="solicitudes bordered w-100 text-end text-md-center overflow-hidden"
        cellspacing="0"
      >
        <thead class="solicitudes__head bg-dark">
          <tr>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Cliente
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Plataforma
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Fecha de inicio
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Fecha fin
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Código de pago
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <FilaSolicitud
            v-for="(solicitud, index) in solicitudes"
            :key="index"
            :id="solicitud.id"
            :usuario="solicitud.usuario"
            :idUsuario="solicitud.idUsuario"
            :plataforma="solicitud.plataforma"
            :idPlataforma="solicitud.idPlataforma"
            :fechaInicioSolicitud="solicitud.fechaInicioSolicitud"
            :fechaFinSolicitud="solicitud.fechaFinSolicitud"
            :codigoPago="solicitud.codigoPago"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped lang="scss">
.solicitudes {
  border-collapse: collapse;
}
.solicitudes__head {
  display: none;
  border-bottom: 0.1rem solid white;
}
.solicitudes__cell::before {
  content: attr(data-label);
  font-weight: 600;
  float: left;
}
@media (min-width: 768px) {
  .solicitudes {
    box-shadow: -20px 20px 30px #ffffff26;
  }
  .solicitudes__head {
    display: table-header-group;
  }
  .solicitudes__cell::before {
    content: "";
  }
}
</style>
