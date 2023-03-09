<script>
import MetodosDePago from "@/components/MetodosDePago.vue";
import { defineComponent } from "vue";
import moment from "moment";
import axios from "axios";
export default defineComponent({
  name: "editarsolicitudusuario",
  data() {
    return {
      solicitud: JSON.parse(this.$route.params.solicitud),
      tiempoDuracion: 0,
      plataformas: [],
    };
  },
  methods: {
    formatearFecha(fechaTipoDate) {
      if (fechaTipoDate) {
        return moment(fechaTipoDate).format("YYYY-MM-DD");
      }
    },
    async getPlataformas() {
      await axios.get("http://localhost:8080/plataforma").then((response) => {
        this.plataformas = response.data;
      });
    },
    async editarSolicitud() {
      this.solicitud.fechaFinSolicitud = this.solicitud.fechaInicioSolicitud;
      this.solicitud.fechaFinSolicitud.setMonth(
        this.solicitud.fechaInicioSolicitud.getMonth() + this.tiempoDuracion
      );
      let params = {
        id: this.solicitud.id,
        idPlataforma: this.solicitud.idPlataforma,
        fechaInicioSolicitud: this.formatearFecha(
          this.solicitud.fechaInicioSolicitud
        ),
        fechaFinSolicitud: this.formatearFecha(
          this.solicitud.fechaFinSolicitud
        ),
        codigoPago: this.solicitud.codigoPago,
      };
      let formularioSolicitud = document.getElementById("formularioSolicitud");
      await axios
        .post("http://localhost:8080/solicitud/modificar", params)
        .then(
          (response) => {
            let verificador = response.data;
            alert(verificador.message);
            if (verificador.estado === "200") {
              formularioSolicitud.reset();
            }
          },
          (error) => {
            alert(error);
          }
        );
    },
  },
  computed: {
    calcularTotalPagar() {
      let precio = 0;
      if (this.solicitud.idPlataforma != null) {
        let plataformaSeleccionada = this.plataformas.filter(
          (plataforma) => plataforma.id === this.solicitud.idPlataforma
        );
        precio =
          plataformaSeleccionada[0].precioPlataforma * this.tiempoDuracion;
      }
      return precio;
    },
  },
  created() {
    this.getPlataformas();
  },
  components: {
    MetodosDePago,
  },
});
</script>
<template>
  <div class="editarperfilusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="bg-dark p-5 panel-solicitar-perfil mx-auto">
        <form id="formularioSolicitud" @submit.prevent="editarSolicitud">
          <h1
            class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0"
          >
            Editar perfil
          </h1>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text my-auto"
            >
              Plataforma:
            </div>
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base text-white my-auto"
            >
              <select
                class="form-select text-black fs-5 w-100"
                aria-label="Default select example"
                v-model.number="solicitud.idPlataforma"
              >
                <option
                  v-for="plataforma in plataformas"
                  :value="plataforma.id"
                  class="text-black fs-5"
                >
                  {{ plataforma.nombrePlataforma }}
                </option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="fechaInicioSolicitud"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text"
                >Fecha de inicio:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="date"
                id="fechaInicioSolicitud"
                name="fechaInicioSolicitud"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="solicitud.fechaInicioSolicitud"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="tiempoDuracion"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text"
                >Tiempo de duración (en meses):</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="number"
                min="1"
                id="tiempoDuracion"
                name="tiempoDuracion"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model.number="tiempoDuracion"
                required
              />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text my-auto"
            >
              Usted debe pagar:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              S/. {{ calcularTotalPagar }}
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="codigoPago"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text"
                >Código de pago:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="text"
                id="codigoPago"
                name="codigoPago"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="solicitud.codigoPago"
                required
              />
            </div>
          </div>
          <div class="row text-center justify-content-center flex-wrap">
            <input
              type="submit"
              value="Enviar"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            />
            <input
              type="reset"
              value="Limpiar"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            />
            <router-link
              to="/missolicitudesusuario"
              class="formulario__button--atras"
            >
              <button
                type="button"
                class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
              >
                Atrás
              </button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="my-5 p-0 mx-md-3 mx-lg-5"><MetodosDePago /></div>
  </div>
</template>
<style scoped lang="scss">
.panel-solicitar-perfil {
  max-width: 55rem;
  box-shadow: -20px 20px 30px #ce47f054;
}
.panel-solicitar-perfil__text {
  color: #ce47f0;
}
.formulario__button {
  max-width: fit-content;
  background-color: #182275;
  white-space: normal;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
  &--atras {
    display: contents;
  }
}
</style>
