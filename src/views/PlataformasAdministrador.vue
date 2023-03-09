<script>
import QuejaUsuario from "@/components/QuejaUsuario.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "misquejasusuario",
  data: () => {
    return {
      misQuejas: [
        {
          TipoQueja: "Cuenta",
          ComentarioQueja:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    };
  },
  components: {
    QuejaUsuario,
  },
  methods: {
    //filtrar perfiles por plataforma
  },
  mounted() {
    //filtrar perfiles del usuario
  },
});
</script>
<template>
  <div class="misperfilesusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Mis quejas
      </h1>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5">
      <QuejaUsuario
        v-for="(miQueja, index) in misQuejas"
        :key="index"
        :TipoQueja="miQueja.TipoQueja"
        :ComentarioQueja="miQueja.ComentarioQueja"
        class="my-5"
      />
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
</style>
