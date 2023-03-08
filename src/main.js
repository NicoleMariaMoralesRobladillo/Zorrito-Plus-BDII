import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/sass/style.scss";
import axios from "axios";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
let token = JSON.parse( localStorage.getItem('token') );
if( token ){
  axios.defaults.headers = {
    Authorization: 'Bearer '+token, 
    'Content-Type': 'Application/json'
  };
}
else{
  
}
/* add icons to the library */
library.add(faUserSecret);
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
