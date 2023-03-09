<script>
import FilaQueja from "@/components/FilaQueja.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "quejasadministrador",
  data: () => {
    return {
      quejas: [
        {
          TipoQueja: "Cuenta",
          ComentarioQueja:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    };
  },
  components: {
    FilaQueja,
  },
  methods: {
    //filtrar quejas por plataforma
  },
  mounted() {
    //cargar todas las quejas
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
        class="solicitudes bordered w-100 text-end text-md-center overflow-hidden"
        cellspacing="0"
      >
        <thead class="solicitudes__head bg-dark">
          <tr>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Tipo de queja
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Comentario
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <FilaQueja
            v-for="(queja, index) in quejas"
            :key="index"
            :TipoQueja="queja.TipoQueja"
            :ComentarioQueja="queja.ComentarioQueja"
          />
        </tbody>
      </table>
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
