<script setup lang="ts">
import Hero from '@/views/Hero.vue';
import Academic from '@/views/Academic.vue';
import Faculty from '@/views/Faculty.vue';
import Partnership from '@/views/Partnership.vue';
</script>

<template>
  <div class="home-container">
    <div id="home"><Hero /></div>
    <div id="programs"><Academic /></div>
    <div id="faculty"><Faculty /></div>
    <div id="partnership"><Partnership /></div>
  </div>
</template>

