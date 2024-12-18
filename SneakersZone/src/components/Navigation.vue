<script setup>
import { RouterLink,RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/wardrobe">Armario</RouterLink>
      <RouterLink to="/perfil">Perfil</RouterLink>
      <RouterLink to="/contact">Contactanos</RouterLink>
    </div>
    <RouterView/>
  </header>
</template>
