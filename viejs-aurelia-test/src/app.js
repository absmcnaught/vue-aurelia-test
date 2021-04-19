import Appt from "./components/Appt.vue";
import About from "./components/About.vue";

import Vue from "vue";

export class App {
  // message = 'Hello World!';

  attached() {
    new Vue({
      el: "#app",
      render: h => h(Appt)
    });
    
    new Vue({
      el: "#about",
      render: h => h(About)
    });
  }


}
