
import portada from "./components/porta.vue";
import intro from "./components/intro.vue";
import sumario from "./components/suma.vue";
import jorna from "./components/jorna.vue";


export default{
  routes: [
    {
      path: "/porta",
      name: "porta",
      component: portada
    },
    {
      path: "/intro",
      name: "intro",
      component: intro
    },
    {
      path: "/suma",
      name: "suma",
      component: sumario
    },
    {
      path: "/jorna",
      name: "jorna",
      component: jorna
    }
  
  ]
} 







