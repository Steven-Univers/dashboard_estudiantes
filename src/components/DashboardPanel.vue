<script setup lang="ts">
// importacion de componentes
import SidebarPanel from './SidebarPanel.vue';
import HeaderDash from './HeaderDash.vue';
import MainDashboard from './MainDashboard.vue';
</script>

<template>
  <div class="flex bg-gray-50/50  font-sans antialiased">
    <div>
      <SidebarPanel/>
    </div>
    <div class="flex-1 flex flex-col">
    <HeaderDash/>
    <MainDashboard/>
    </div>
  </div>

</template>

<style>
/* opcional */
</style>
