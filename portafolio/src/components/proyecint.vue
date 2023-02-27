<template>
    <div class="link-container">
      <a :href="link.url" :target="link.target">{{ link.text }}</a>
    </div>
  </template>
  
  <script>
    export default {
        props: {
        link: {
            type: Object,
            required: true,
        },
        },
    };
  </script>
  
  <style scoped>
  .link-container {
    margin-top: 20px;
  }
  </style>
  