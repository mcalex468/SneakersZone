<script setup>
import { defineProps } from 'vue';
import sneakers from '@/assets/sneakers.json'; // Importa el array de sneakers

// Recibe el parámetro `id` como prop
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

// Busca el sneaker correspondiente con el id
const sneakerDetail = sneakers.find(sneaker => sneaker.id === props.id);
</script>

<template>
    <h3>Detalle Producto</h3>
  <div v-if="sneakerDetail">
    <h2>{{ sneakerDetail.nombre }}</h2>
    <img :src="sneakerDetail.img" :alt="sneakerDetail.nombre" class="sneaker-img" />
    <p>{{ sneakerDetail.talla }}</p>
    <p>{{ sneakerDetail.descripcion }}</p>
    <p>Precio:{{ sneakerDetail.precio }}€</p>
    <!-- Otros detalles del sneaker -->
  </div>
  <div v-else>
    <p>Producto no encontrado</p>
  </div>
</template>
