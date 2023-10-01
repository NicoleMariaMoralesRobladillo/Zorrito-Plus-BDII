<script>
import QuejaUsuario from "@/components/QuejaUsuario.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "misquejasusuario",
  data: () => {
    return {
      misQuejas: [],
    };
  },
  components: {
    QuejaUsuario,
  },
  methods: {
    async getMisQuejas() {
      await axios
        .get("http://www.grupo4.tech:8080/ZP/quejas/user")
        .then((response) => {
          this.misQuejas = response.data;
        });
    },
  },
  created() {
    this.getMisQuejas();
  },
});
</script>
<template>
  <div class="misquejasusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Mis quejas
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5" v-if="misQuejas.length != 0">
      <QuejaUsuario
        v-for="(miQueja, index) in misQuejas"
        :key="index"
        :id="miQueja.id"
        :comentario="miQueja.comentario"
        :idTipoQueja="miQueja.idTipoQueja"
        :nombreTipoQueja="miQueja.nombreTipoQueja"
        class="my-5"
      />
    </div>
  </div>
</template>
