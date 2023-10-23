<script>
import MetodosDePago from "@/components/MetodosDePago.vue";
import { defineComponent } from "vue";
import moment from "moment";
import axios from "axios";
export default defineComponent({
  name: "solicitarperfilusuario",
  data: () => {
    return {
      mostrarMensajeValidacionPlataforma: false,
      mostrarMensajeValidacionFechaInicio: false,
      mostrarMensajeValidacionTiempoDuracion: false,
      mostrarMensajeValidacionMontoPagar: false,
      mostrarMensajeValidacionCodigoPago: false,
      mensajeValidacionPlataforma: "",
      mensajeValidacionFechaInicio: "",
      mensajeValidacionTiempoDuracion: "",
      mensajeValidacionMontoPagar: "",
      mensajeValidacionCodigoPago: "",
      tiempoDuracion: 0,
      plataformas: [],
      solicitud: {
        idPlataforma: null,
        fechaInicioSolicitud: null,
        fechaFinSolicitud: null,
        codigoPago: "",
      },
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
    limpiarMensajesValidacion() {
      this.mostrarMensajeValidacionPlataforma = false;
      this.mostrarMensajeValidacionFechaInicio = false;
      this.mostrarMensajeValidacionTiempoDuracion = false;
      this.mostrarMensajeValidacionMontoPagar = false;
      this.mostrarMensajeValidacionCodigoPago = false;
    },
    validarFormulario() {
      this.limpiarMensajesValidacion();
      if (
        this.solicitud.idPlataforma == null ||
        this.solicitud.idPlataforma == ""
      ) {
        this.mensajeValidacionPlataforma = "La plataforma no debe estar vacía.";
        this.mostrarMensajeValidacionPlataforma = true;
        return false;
      }
      if (
        this.solicitud.fechaInicioSolicitud == null ||
        this.solicitud.fechaInicioSolicitud == ""
      ) {
        this.mensajeValidacionFechaInicio =
          "La fecha de inicio del servicio no debe estar vacía.";
        this.mostrarMensajeValidacionFechaInicio = true;
        return false;
      }
      let fechaHoy = new Date(Date.now());
      let fechaInicioSolicitud = new Date(this.solicitud.fechaInicioSolicitud);
      if (
        fechaInicioSolicitud < fechaHoy ||
        fechaInicioSolicitud.getFullYear() != fechaHoy.getFullYear()
      ) {
        this.mensajeValidacionFechaInicio =
          "La fecha de inicio del servicio no debe ser anterior a hoy y en el presente año.";
        this.mostrarMensajeValidacionFechaInicio = true;
        return false;
      }
      if (
        this.tiempoDuracion == null ||
        this.tiempoDuracion == "" ||
        new RegExp(/\s+/).test(this.tiempoDuracion)
      ) {
        this.mensajeValidacionTiempoDuracion =
          "El tiempo de duración del servicio no debe estar vacío.";
        this.mostrarMensajeValidacionTiempoDuracion = true;
        return false;
      }
      if (!Number.isInteger(this.tiempoDuracion)) {
        this.mensajeValidacionTiempoDuracion =
          "El tiempo de duración del servicio debe ser entero.";
        this.mostrarMensajeValidacionTiempoDuracion = true;
        return false;
      }
      if (this.tiempoDuracion < 1 || this.tiempoDuracion > 12) {
        this.mensajeValidacionTiempoDuracion =
          "El tiempo de duración del servicio debe ser de 1 a 12 meses.";
        this.mostrarMensajeValidacionTiempoDuracion = true;
        return false;
      }
      if (
        this.solicitud.codigoPago == null ||
        this.solicitud.codigoPago == "" ||
        new RegExp(/\s+/).test(this.solicitud.codigoPago)
      ) {
        this.mensajeValidacionCodigoPago =
          "El código de pago no debe estar vacío.";
        this.mostrarMensajeValidacionCodigoPago = true;
        return false;
      }
      if (this.solicitud.codigoPago.length != 6) {
        this.mensajeValidacionCodigoPago =
          "El código de pago debe tener 6 caracteres.";
        this.mostrarMensajeValidacionCodigoPago = true;
        return false;
      }
      return true;
    },
    async registrarSolicitud() {
      if (this.validarFormulario()) {
        let fechaInicioSolicitudDate = Date.parse(
          this.solicitud.fechaInicioSolicitud
        );
        this.solicitud.fechaFinSolicitud = new Date(fechaInicioSolicitudDate);
        this.solicitud.fechaFinSolicitud.setMonth(
          this.solicitud.fechaFinSolicitud.getMonth() + this.tiempoDuracion
        );
        let params = {
          idPlataforma: this.solicitud.idPlataforma,
          fechaInicioSolicitud: this.formatearFecha(
            this.solicitud.fechaInicioSolicitud
          ),
          fechaFinSolicitud: this.formatearFecha(
            this.solicitud.fechaFinSolicitud
          ),
          codigoPago: this.solicitud.codigoPago,
        };
        let formularioSolicitud = document.getElementById(
          "formularioSolicitud"
        );
        await axios
          .post("http://localhost:8080/solicitud/registrar", params)
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
      }
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
  <div class="solicitarperfilusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="bg-dark p-5 panel-solicitar-perfil mx-auto">
        <form id="formularioSolicitud" @submit.prevent="registrarSolicitud">
          <h1
            class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0"
          >
            Solicitar perfil
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
                id="plataformaSolicitud"
                name="plataformaSolicitud"
                class="form-select text-black fs-5 w-100"
                aria-label="Default select example"
                v-model.number="solicitud.idPlataforma"
              >
                <option
                  v-for="plataforma in plataformas"
                  :value="plataforma.id"
                  :id="plataforma.id"
                  class="text-black fs-5"
                >
                  {{ plataforma.nombrePlataforma }}
                </option>
              </select>
              <div
                id="mensajeValidacionPlataforma"
                :key="mensajeValidacionPlataforma"
                class="py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionPlataforma }"
              >
                {{ mensajeValidacionPlataforma }}
              </div>
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
              />
              <div
                id="mensajeValidacionFechaInicio"
                :key="mensajeValidacionFechaInicio"
                class="py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionFechaInicio }"
              >
                {{ mensajeValidacionFechaInicio }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="tiempoDuracionSolicitud"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text"
                >Tiempo de duración (en meses):</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="number"
                id="tiempoDuracionSolicitud"
                name="tiempoDuracionSolicitud"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model.number="tiempoDuracion"
              />
              <div
                id="mensajeValidacionTiempoDuracion"
                :key="mensajeValidacionTiempoDuracion"
                class="py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionTiempoDuracion }"
              >
                {{ mensajeValidacionTiempoDuracion }}
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text my-auto"
            >
              Usted debe pagar:
            </div>
            <div
              id="montoPagarSolicitud"
              class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
            >
              S/. {{ calcularTotalPagar }}
              <div
                id="mensajeValidacionMontoPagar"
                :key="mensajeValidacionMontoPagar"
                class="py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionMontoPagar }"
              >
                {{ mensajeValidacionMontoPagar }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="codigoPagoSolicitud"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text"
                >Código de pago:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="text"
                id="codigoPagoSolicitud"
                name="codigoPagoSolicitud"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="solicitud.codigoPago"
              />
              <div
                id="mensajeValidacionCodigoPago"
                :key="mensajeValidacionCodigoPago"
                class="py-2 px-3 bg-danger fw-normal rounded-3 mt-1 fs-6"
                :class="{ 'd-none': !mostrarMensajeValidacionCodigoPago }"
              >
                {{ mensajeValidacionCodigoPago }}
              </div>
            </div>
          </div>
          <div class="row text-center justify-content-center flex-wrap">
            <input
              id="enviarButton"
              name="enviarButton"
              type="submit"
              value="Enviar"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            />
            <input
              id="resetButton"
              type="reset"
              value="Limpiar"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            />
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
}
</style>
