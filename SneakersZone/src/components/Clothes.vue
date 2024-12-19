<script setup>
import clothes from '@/assets/clothes.json';
</script>

<template>
    <h2>Clothes</h2>
    <div class="clothes">
      <div v-for="articulo in clothes" :key="articulo.id" class="clothes-card">
        <RouterLink :to="{ name: 'clothesDetails', params: { id: articulo.id } }">
          <img :src="articulo.img" :alt="articulo.nombre" class="clothe-img" />
          <p>{{ articulo.nombre }}</p>
        </RouterLink>
      </div>
    </div>
</template>