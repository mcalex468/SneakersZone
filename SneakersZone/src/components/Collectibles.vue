<script setup>
import collectibles from '@/assets/collectibles.json';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <h2>Collectibles</h2>
    <div class="collectibles">
      <div v-for="collectible in collectibles" :key="collectible.id" class="collectibles-card">
        <RouterLink :to="{ name: 'collectibleDetails', params: { id: collectible.id } }">
          <img :src="collectible.img" :alt="collectible.nombre" class="collectible-img" />
          <p>{{ collectible.nombre }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
