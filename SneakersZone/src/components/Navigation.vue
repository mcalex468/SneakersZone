<script setup>
import { RouterLink,RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/armario">Armario</RouterLink>
      <RouterLink to="/perfil">Perfil</RouterLink>
      <RouterLink to="/contactanos">Contactanos</RouterLink>
    </div>
    <RouterView/>
  </header>
</template>
