<template>
    <div class="container">
      <h2>Contenidos</h2>
      <ul>
        <li v-for="(content, index) in contents" :key="index">
          <router-link :to="content.path">{{ content.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contents: [
          { title: "jornalizacion", path: "/jorna" },
          { title: "calendarizacion", path: "/calen" },
          { title: "apuntes", path: "/apuntes" },
          { title: "Tareas ex-aula", path: "/tareaex" },
        ],
      };
    },
  };
  </script>
  
  <style>
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  
  
  