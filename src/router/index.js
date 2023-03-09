import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
    meta: {
      title: "Inicio | Zorrito +",
    },
  },
  {
    path: "/servicios",
    name: "servicios",
    // route level code-splitting
    // this generates a separate chunk (servicios.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "servicios" */ "../views/Servicios.vue"),
    meta: {
      title: "Servicios | Zorrito +",
    },
  },
  {
    path: "/iniciarsesion",
    name: "iniciarsesion",
    // route level code-splitting
    // this generates a separate chunk (iniciarsesion.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "iniciarsesion" */ "../views/IniciarSesion.vue"
      ),
    meta: {
      title: "Iniciar sesión | Zorrito +",
    },
  },
  {
    path: "/registrate",
    name: "registrate",
    // route level code-splitting
    // this generates a separate chunk (registrate.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "registrate" */ "../views/Registrate.vue"),
    meta: {
      title: "Regístrate | Zorrito +",
    },
  },
  {
    path: "/misperfilesusuario",
    name: "misperfilesusuario",
    // route level code-splitting
    // this generates a separate chunk (misperfilesusuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "misperfilesusuario" */ "../views/MisPerfilesUsuario.vue"
      ),
    meta: {
      title: "Mis perfiles | Zorrito +",
    },
  },
  {
    path: "/solicitarperfilusuario",
    name: "solicitarperfilusuario",
    // route level code-splitting
    // this generates a separate chunk (solicitarperfilusuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "solicitarperfilusuario" */ "../views/SolicitarPerfilUsuario.vue"
      ),
    meta: {
      title: "Solicitar perfil | Zorrito +",
    },
  },
  {
    path: "/missolicitudesusuario",
    name: "missolicitudesusuario",
    // route level code-splitting
    // this generates a separate chunk (missolicitudesusuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "missolicitudesusuario" */ "../views/MisSolicitudesUsuario.vue"
      ),
    meta: {
      title: "Mis solicitudes | Zorrito +",
    },
  },
  {
    path: "/editarsolicitudusuario/:solicitud",
    name: "editarsolicitudusuario",
    // route level code-splitting
    // this generates a separate chunk (editarsolicitudusuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "editarsolicitudusuario" */ "../views/EditarSolicitudUsuario.vue"
      ),
    meta: {
      title: "Editar solicitud | Zorrito +",
    },
  },
  {
    path: "/misquejasusuario",
    name: "misquejasusuario",
    // route level code-splitting
    // this generates a separate chunk (misquejasusuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "misquejasusuario" */ "../views/MisQuejasUsuario.vue"
      ),
    meta: {
      title: "Mis quejas | Zorrito +",
    },
  },
  {
    path: "/ingresarquejausuario",
    name: "ingresarquejausuario",
    // route level code-splitting
    // this generates a separate chunk (ingresarquejausuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ingresarquejausuario" */ "../views/IngresarQuejaUsuario.vue"
      ),
    meta: {
      title: "Ingresar queja | Zorrito +",
    },
  },
  {
    path: "/editarquejausuario/:queja",
    name: "editarquejausuario",
    // route level code-splitting
    // this generates a separate chunk (editarquejausuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "editarquejausuario" */ "../views/EditarQuejaUsuario.vue"
      ),
    meta: {
      title: "Editar queja | Zorrito +",
    },
  },
  {
    path: "/miinformacionusuario",
    name: "miinformacionusuario",
    // route level code-splitting
    // this generates a separate chunk (miinformacionusuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "miinformacionusuario" */ "../views/MiInformacionUsuario.vue"
      ),
    meta: {
      title: "Mi información | Zorrito +",
    },
  },
  {
    path: "/editarinformacionusuario/:miInformacionUsuario",
    name: "editarinformacionusuario",
    // route level code-splitting
    // this generates a separate chunk (editarinformacionusuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "editarinformacionusuario" */ "../views/EditarInformacionUsuario.vue"
      ),
    meta: {
      title: "Editar mi información | Zorrito +",
    },
  },
  {
    path: "/solicitudesadministrador",
    name: "solicitudesadministrador",
    // route level code-splitting
    // this generates a separate chunk (solicitudesadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "solicitudesadministrador" */ "../views/SolicitudesAdministrador.vue"
      ),
    meta: {
      title: "Solicitudes | Zorrito +",
    },
  },
  {
    path: "/vermassolicitudesadministrador/:solicitud",
    name: "vermassolicitudesadministrador",
    // route level code-splitting
    // this generates a separate chunk (vermassolicitudesadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "vermassolicitudesadministrador" */ "../views/VerMasSolicitudesAdministrador.vue"
      ),
    meta: {
      title: "Ver más de la solicitud | Zorrito +",
    },
  },
  {
    path: "/quejasadministrador",
    name: "quejasadministrador",
    // route level code-splitting
    // this generates a separate chunk (quejasadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "quejasadministrador" */ "../views/QuejasAdministrador.vue"
      ),
    meta: {
      title: "Quejas | Zorrito +",
    },
  },
  {
    path: "/vermasquejasadministrador/:queja",
    name: "vermasquejasadministrador",
    // route level code-splitting
    // this generates a separate chunk (vermasquejasadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "vermasquejasadministrador" */ "../views/VerMasQuejasAdministrador.vue"
      ),
    meta: {
      title: "Ver más de la queja | Zorrito +",
    },
  },
  {
    path: "/usuariosadministrador",
    name: "usuariosadministrador",
    // route level code-splitting
    // this generates a separate chunk (usuariosadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "usuariosadministrador" */ "../views/UsuariosAdministrador.vue"
      ),
    meta: {
      title: "Usuarios | Zorrito +",
    },
  },
  {
    path: "/perfilesadministrador",
    name: "perfilesadministrador",
    // route level code-splitting
    // this generates a separate chunk (perfilesadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "perfilesadministrador" */ "../views/PerfilesAdministrador.vue"
      ),
    meta: {
      title: "Perfiles | Zorrito +",
    },
  },
  {
    path: "/ingresarplataformaadministrador",
    name: "ingresarplataformaadministrador",
    // route level code-splitting
    // this generates a separate chunk (ingresarplataformaadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ingresarplataformaadministrador" */ "../views/IngresarPlataformaAdministrador.vue"
      ),
    meta: {
      title: "Ingresar plataforma | Zorrito +",
    },
  },
  {
    path: "/plataformasadministrador",
    name: "plataformasadministrador",
    // route level code-splitting
    // this generates a separate chunk (plataformasadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "plataformasadministrador" */ "../views/PlataformasAdministrador.vue"
      ),
    meta: {
      title: "Plataformas | Zorrito +",
    },
  },
  {
    path: "/editarplataformasadministrador/:plataforma",
    name: "editarplataformasadministrador",
    // route level code-splitting
    // this generates a separate chunk (editarplataformasadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "editarplataformasadministrador" */ "../views/EditarPlataformaAdministrador.vue"
      ),
    meta: {
      title: "Editar plataforma | Zorrito +",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
