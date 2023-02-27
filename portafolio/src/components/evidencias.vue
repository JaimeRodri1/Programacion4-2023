<template>
    <div class="image-gallery">
      <h2>Galería de imágenes</h2>
      <div class="row">
        <div class="col-md-4" v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" class="img-fluid">
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        data() {
        return {
            images: [
            { src: "path/to/image1.jpg", alt: "Descripción de la imagen 1" },
            { src: "path/to/image2.jpg", alt: "Descripción de la imagen 2" },
            { src: "path/to/image3.jpg", alt: "Descripción de la imagen 3" },
            { src: "path/to/image4.jpg", alt: "Descripción de la imagen 4" },
            ],
        };
        },
    };
  </script>
  
  <style scoped>
  .image-gallery {
    margin-top: 20px;
  }
  </style>
  