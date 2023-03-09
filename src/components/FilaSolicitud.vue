<script>
export default {
  props: {
    id: Number,
    usuario: String,
    idUsuario: Number,
    plataforma: String,
    idPlataforma: Number,
    fechaInicioSolicitud: String,
    fechaFinSolicitud: String,
    codigoPago: String,
  },
};
</script>
<template>
  <tr class="bg-dark d-block d-md-table-row mb-4 mb-md-0">
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Cliente"
    >
      {{ usuario }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Plataforma"
    >
      {{ plataforma }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Fecha de inicio"
    >
      {{ fechaInicioSolicitud }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Fecha fin"
    >
      {{ fechaFinSolicitud }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Código de pago"
    >
      {{ codigoPago }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Acciones"
    >
      <div class="d-md-flex justify-content-md-center">
        <router-link
          :to="{
            name: 'vermassolicitudesadministrador',
            params: {
              solicitud: JSON.stringify(this.$props),
            },
          }"
          class="nav-link active fs-5 p-0 fw-bold text-uppercase"
        >
          <button
            class="formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100"
          >
            Ver más
          </button></router-link
        >
      </div>
    </td>
  </tr>
</template>
<style scoped lang="scss">
.formulario__button {
  max-width: fit-content;
  background-color: #182275;
  white-space: normal;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
}
.solicitudes__cell::before {
  content: attr(data-label);
  font-weight: 600;
  float: left;
}
@media (min-width: 768px) {
  .solicitudes__cell::before {
    content: "";
  }
}
</style>
