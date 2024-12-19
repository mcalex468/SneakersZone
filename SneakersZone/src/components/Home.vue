<template>
  <div>
    <h2>Sneakers</h2>
    <div class="sneakers">
      <div v-for="articulo in articulos.sneakers" :key="articulo.id" class="sneakers-card">
        <RouterLink :to="{ name: 'sneakerDetails', params: { id: articulo.id } }">
          <img :src="articulo.img" :alt="articulo.nombre" class="sneaker-img" />
          <p>{{ articulo.nombre }}</p>
        </RouterLink>
      </div>
    </div>

    <h2>Clothes</h2>
    <div class="clothes">
      <div v-for="articulo in articulos.clothes" :key="articulo.id" class="clothes-card">
        <RouterLink :to="{ name: 'clothesDetails', params: { id: articulo.id } }">
          <img :src="articulo.img" :alt="articulo.nombre" class="clothe-img" />
          <p>{{ articulo.nombre }}</p>
        </RouterLink>
      </div>
    </div>

    <h2>Collectibles</h2>
    <div class="collectibles">
      <div v-for="articulo in articulos.collectibles" :key="articulo.id" class="collectibles-card">
        <RouterLink :to="{ name: 'collectibleDetails', params: { id: articulo.id } }">
          <img :src="articulo.img" :alt="articulo.nombre" class="collectible-img" />
          <p>{{ articulo.nombre }}</p>
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import articulos from '@/assets/articulos.json';
console.log(articulos);  

import { RouterLink, RouterView } from 'vue-router';
</script>