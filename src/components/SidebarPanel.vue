<script setup lang="ts">
// import { LayoutDashboard } from 'lucide-vue-next' // O tus iconos de preferencia
</script>

<template>
  <div class="w-64 bg-[#231e5c] text-white flex flex-col min-h-screen p-4">
    <div class="flex items-center gap-3 px-2 py-6">
      <div class="p-4 bg-[#8b2cf5] rounded-xl text-white">
        <svg xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <p class="text-xl leading-tight font-semibold">IA &<br>Estudiantes</p>
    </div>

    <!-- foco seleccion dashboard -->
    <div class="flex-1 space-y-2">
      <div class="flex items-center font-bold gap-3 bg-[#9000ffaa] px-7 py-4 rounded-xl transition-colors">
       <!-- icono -->
        <p class="text-white">Dashboard</p>
      </div>
    </div>
  </div>
</template>
