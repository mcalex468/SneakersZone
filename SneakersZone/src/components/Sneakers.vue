<template>
  <div>
    <h2>Sneakers</h2>
    <div class="sneakers">
      <div v-for="articulo in sneakers" :key="articulo.id" class="sneakers-card">
        <RouterLink :to="{ name: 'sneakerDetails', params: { id: articulo.id } }">
          <img :src="articulo.img" :alt="articulo.nombre" class="sneaker-img" />
          <p>{{ articulo.nombre }}</p>
        </RouterLink>
      </div>
    </div>
<RouterView/>
</div>
</template>

<script setup>
import sneakers from '@/assets/sneakers.json';
import { RouterLink, RouterView } from 'vue-router';
</script>