<template>
  <div>
    <h2>Sneakers</h2>
    <div class="sneakers">
      <div v-for="sneaker in sneakers" :key="sneaker.id" class="sneakers-card">
        <RouterLink :to="{ name: 'sneakerDetails', params: { id: sneaker.id } }">
          <img :src="sneaker.img" :alt="sneaker.nombre" class="sneaker-img" />
          <p>{{ sneaker.nombre }}</p>
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