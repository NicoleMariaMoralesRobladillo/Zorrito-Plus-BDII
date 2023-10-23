<script>
import InformacionUsuarioAdministrador from "@/components/InformacionUsuarioAdministrador.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "usuariosadministrador",
  data: () => {
    return {
      usuarios: [],
    };
  },
  components: {
    InformacionUsuarioAdministrador,
  },
  methods: {
    async getUsuarios() {
      await axios.get("http://localhost:8080/usuario/list").then((response) => {
        this.usuarios = response.data;
      });
    },
  },
  mounted() {
    this.getUsuarios();
  },
});
</script>
<template>
  <div class="usuariosadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Usuarios
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5" v-if="usuarios.length != 0">
      <InformacionUsuarioAdministrador
        v-for="(usuario, index) in usuarios"
        :key="index"
        :id="usuario.id"
        :nombre="usuario.nombre"
        :apellido="usuario.apellido"
        :celular="usuario.celular"
        :correo="usuario.correo"
        :dni="usuario.dni"
        :contrasenia="usuario.contrasenia"
        :rol="usuario.rol"
        class="my-5"
      />
    </div>
  </div>
</template>
