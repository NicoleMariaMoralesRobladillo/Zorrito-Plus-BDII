<script>
import InformacionUsuario from "@/components/InformacionUsuario.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "miinformacionusuario",
  data: () => {
    return {
      miInformacion: {
        id: null,
        nombre: "",
        apellido: "",
        celular: "",
        correo: "",
        dni: "",
        contrasenia: "",
        rol: "",
      },
    };
  },
  components: {
    InformacionUsuario,
  },
  methods: {
    async getMiInformacion() {
      await axios.get("http://localhost:8080/usuario/info").then((response) => {
        this.miInformacion = response.data;
      });
    },
  },
  created() {
    this.getMiInformacion();
  },
});
</script>
<template>
  <div class="miinformacionusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Mi información
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5" v-if="miInformacion != null">
      <InformacionUsuario
        :id="miInformacion.id"
        :nombre="miInformacion.nombre"
        :apellido="miInformacion.apellido"
        :celular="miInformacion.celular"
        :correo="miInformacion.correo"
        :dni="miInformacion.dni"
        :contrasenia="miInformacion.contrasenia"
        class="my-5"
      />
    </div>
  </div>
</template>
