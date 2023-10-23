<script>
import FilaQueja from "@/components/FilaQueja.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "quejasadministrador",
  data: () => {
    return {
      quejas: [],
    };
  },
  components: {
    FilaQueja,
  },
  methods: {
    async getQuejas() {
      await axios.get("http://localhost:8080/quejas/admin").then((response) => {
        this.quejas = response.data;
      });
    },
  },
  created() {
    this.getQuejas();
  },
});
</script>
<template>
  <div class="quejasadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Quejas
      </h1>
    </div>
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <table
        class="quejas bordered w-100 text-end text-md-center overflow-hidden"
        cellspacing="0"
      >
        <thead class="quejas__head bg-dark">
          <tr>
            <th
              class="quejas__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Cliente
            </th>
            <th
              class="quejas__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Tipo de queja
            </th>
            <th
              class="quejas__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Estado
            </th>
            <th
              class="quejas__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <FilaQueja
            v-for="(queja, index) in quejas"
            :key="index"
            :id="queja.id"
            :comentario="queja.comentario"
            :idUsuario="queja.idUsuario"
            :usuario="queja.usuario"
            :nombreTipoQueja="queja.nombreTipoQueja"
            :idTipoQueja="queja.idTipoQueja"
            :estado="queja.estado"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped lang="scss">
.quejas {
  border-collapse: collapse;
}
.quejas__head {
  display: none;
  border-bottom: 0.1rem solid white;
}
.quejas__cell::before {
  content: attr(data-label);
  font-weight: 600;
  float: left;
}
@media (min-width: 768px) {
  .quejas {
    box-shadow: -20px 20px 30px #ffffff26;
  }
  .quejas__head {
    display: table-header-group;
  }
  .quejas__cell::before {
    content: "";
  }
}
</style>
