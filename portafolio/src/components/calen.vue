<template>
    <div class="container">
      <h2>Calendario</h2>
      <div class="row">
        <div class="col-md-4" v-for="(week, index) in calendar" :key="index">
          <h4>Semana {{ index + 1 }}</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(day, i) in week" :key="i">
              {{ day }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        data() {
        return {
            calendar: [
            [ "Martes 8:50 am - 10:20 am" ],
            [ "Martes 12:40 pm - 2:20 pm", ],
            ],
        };
        },
    };
  </script>
  
  <style>
  ul {
    margin-bottom: 0;
  }
  </style>
  