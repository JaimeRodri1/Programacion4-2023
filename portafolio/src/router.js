
import porta from "./components/porta.vue";
import intro from "./components/intro.vue";
import sumari from "./components/suma.vue";
import jornali from "./components/jorna.vue";


export default{
  routes: [
    {
      path: "/",
      Name: "Portada",
      component: porta
    },
    {
      path: "/intro",
      Name: "Introducccion",
      component: intro
    },
    {
      path: "/suma",
      Name: "Sumario",
      component: sumari
    },
    {
      path: "/jorna",
      Name: "Jornalizacion",
      component: jornali
    }
  
  ]
} 







