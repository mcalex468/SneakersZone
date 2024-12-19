<script setup>
import collectibles from '@/assets/collectibles.json';
</script>

<template>
    <div>
        <h2>Collectibles</h2>
        <div class="collectibles">
            <div v-for="articulo in collectibles" :key="articulo.id" class="collectibles-card">
                <RouterLink :to="{ name: 'collectibleDetails', params: { id: articulo.id } }">
                    <img :src="articulo.img" :alt="articulo.nombre" class="collectible-img" />
                    <p>{{ articulo.nombre }}</p>
                </RouterLink>
            </div>
        </div>
        <RouterView />
    </div>
</template>
