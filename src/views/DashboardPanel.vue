<script setup lang="ts">
// importacion de componentes
import { ref } from "vue";
import SidebarPanel from "@/components/SidebarPanel.vue";
import HeaderDash from "@/components/HeaderDash.vue";
import MainDashboard from "@/components/MainDashboard.vue";

// funcion que esconde el sidebar
const isSidebarVisible = ref(true);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <div class="flex bg-gray-50/50 font-sans antialiased">
    <div v-if="isSidebarVisible" class="transition-all duration-300">
      <SidebarPanel />
    </div>
    <div :class="isSidebarVisible ? 'flex-1 flex flex-col' : 'w-full flex flex-col'">
      <HeaderDash @toggle-sidebar="toggleSidebar" />
      <MainDashboard />
    </div>
  </div>
</template>

<style>
/* opcional */
</style>
