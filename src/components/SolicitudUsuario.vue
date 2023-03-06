<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPenToSquare);
export default {
  props: {
    Plataforma: String,
    FechaInicio: String,
    TiempoDuracion: Number,
    CapturaPago: String,
  },
  methods: {
    eliminarSolicitud() {
      //función eliminar solicitud
    },
    eliminarSolicitudButton() {
      alert("Se ha eliminado la solicitud con éxito.");
      this.eliminarSolicitud();
    },
  },
};
</script>
<template>
  <div class="bg-dark p-5 position-relative solicitud-card">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
      >
        <div class="text-center solicitud-icon">
          <img
            src="../assets/images/queja.png"
            alt="Solicitud"
            class="w-100 pb-2"
          />
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-8 d-flex align-items-center">
        <div class="w-100">
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Plataforma:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ Plataforma }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Fecha de inicio:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ FechaInicio }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Tiempo de duración:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ TiempoDuracion }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Captura de pago:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ CapturaPago }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute end-0 top-0 button__box p-4 d-flex flex-row">
      <router-link
        :to="{
          name: 'editarsolicitudusuario',
          params: {
            solicitud: JSON.stringify(this.$props),
          },
        }"
        class="nav-link active fs-5 p-0 fw-bold text-uppercase"
      >
        <button
          type="button"
          class="button button--editar pe-2 bg-transparent border-0"
        >
          <font-awesome-icon
            icon="fa-solid fa-pen-to-square"
            class="fs-4"
          /></button
      ></router-link>
      <button
        type="button"
        class="button button--eliminar ps-2 bg-transparent border-0"
        v-on:click="eliminarSolicitudButton"
      >
        <font-awesome-icon icon="fa-solid fa-trash" class="fs-4" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.solicitud {
  &-icon {
    max-width: 15rem;
  }
}
.button {
  color: white;
  &__box {
    width: fit-content;
  }
  &:hover {
    transform: scale(1.1);
  }
  &--eliminar {
    &:hover {
      color: #f84440;
    }
  }
  &--editar {
    &:hover {
      color: greenyellow;
    }
  }
}
</style>
