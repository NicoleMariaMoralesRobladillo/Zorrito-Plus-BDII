<script>
import PlataformaAdministrador from "@/components/PlataformaAdministrador.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "plataformasadministrador",
  data: () => {
    return {
      plataformas: [],
    };
  },
  components: {
    PlataformaAdministrador,
  },
  methods: {
    async getPlataformas() {
      await axios
        .get("http://www.grupo4.tech:8080/ZP/plataforma")
        .then((response) => {
          this.plataformas = response.data;
        });
    },
  },
  created() {
    this.getPlataformas();
  },
});
</script>
<template>
  <div class="plataformasadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Plataformas
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5">
      <PlataformaAdministrador
        v-for="(plataforma, index) in plataformas"
        :key="index"
        :id="plataforma.id"
        :nombrePlataforma="plataforma.nombrePlataforma"
        :precioPlataforma="plataforma.precioPlataforma"
        :estado="plataforma.estado"
        class="my-5"
      />
    </div>
  </div>
</template>
