
import portada from "./components/porta.vue";
import intro from "./components/intro.vue";
import sumario from "./components/suma.vue";
import jorna from "./components/jorna.vue";


export default{
  routes: [
    {
      path: "/porta",
      Name: "Portada",
      component: portada
    },
    {
      path: "/intro",
      Name: "Introducccion",
      component: intro
    },
    {
      path: "/suma",
      Name: "Sumario",
      component: sumario
    },
    {
      path: "/jorna",
      Name: "Jornalizacion",
      component: jorna
    }
  
  ]
} 







