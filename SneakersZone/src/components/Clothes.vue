<script setup>
import clothes from '@/assets/clothes.json';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <h2>Clothes</h2>
    <div class="clothes">
      <div v-for="clothe in clothes" :key="clothe.id" class="clothes-card">
        <RouterLink :to="{ name: 'clothesDetails', params: { id: clothe.id } }">
          <img :src="clothe.img" :alt="clothe.nombre" class="clothe-img" />
          <p>{{ clothe.nombre }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
