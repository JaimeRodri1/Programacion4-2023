<template>
    <div class="container-fluid p-0">
      <div class="jumbotron jumbotron-fluid bg-dark text-light">
        <div class="container">
          <h1 class="display-4">{{ title }}</h1>
          <a href=""><img src="./assets/logou.png"></a>
          <p class="lead">{{ Estudiante }}</p>
          <p class="lead">{{ Materia }}</p>
          <p class="lead">{{ Fecha }}</p>
          <router-link to="/porta" class="btn btn-primary">Portada</router-link>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        title: "Universidad Gerardo Barrios",
        Estudiante: "Estudiante: Jaime Arnoldo Rodriguez Meza.",
        Materia: "Materia: Programacion 4",
        Fecha: "26/02/2023"
      };
    },
  };
</script>
  
<style>
  .jumbotron {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
  