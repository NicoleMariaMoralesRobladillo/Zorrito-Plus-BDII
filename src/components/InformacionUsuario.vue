<script>
export default {
  props: {
    Nombres: String,
    Apellidos: String,
    Correo: String,
    Contrasenia: String,
    TelefonoContacto: String,
    DNI: String,
    Tipo: String,
  },
};
</script>
<template>
  <div class="bg-dark p-5">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
      >
        <div class="text-center user-icon-perfil">
          <img
            src="../assets/images/user.png"
            alt="Foto de perfil"
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
              Nombres:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ Nombres }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Apellidos:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ Apellidos }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Correo:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ Correo }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Contraseña:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ Contrasenia }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              Teléfono de contacto:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ TelefonoContacto }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto text-white"
            >
              DNI:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ DNI }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.user-icon-perfil {
  max-width: 15rem;
}
</style>
