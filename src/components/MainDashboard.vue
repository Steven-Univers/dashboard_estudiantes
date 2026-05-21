<script setup lang="ts">
import BournoutCard from './BournoutCard.vue';
import CardsComponents from './CardsComponents.vue';
</script>

<template>
  <main class="p-12 w-full mx-auto space-y-8">
       <!-- titulo y descripcion -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900 tracking-tight mb-2">  <!-- tracking-tight es separacion de letras -->
            Impacto de la IA en estudiantes.
          </h1>
          <p class="text-gray-500 font-medium text-base">
            Exploracion de la IA , la relacion con habilidades y bienestar estudiantil
          </p>
        </div>

          <!-- card de burnout -->
    <div class="grid grid-cols-12 gap-8 items-start">

      <div class="col-span-5">
        <BournoutCard />
      </div>

      <div class="col-span-7 w-full">
        <CardsComponents />
      </div>
    </div>
  
  </main>
</template>
