<script setup lang="ts">
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { SmilePlus, AlertTriangle } from "lucide-vue-next";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["Alto", "Medio", "Bajo", "Muy bajo"],
  datasets: [
    {
      backgroundColor: ["#e15252", "#f0932b", "#7f76ff", "#22a6b3"],
      data: [27, 31, 26, 16],
      borderWidth: 0,
      cutout: "65%", // Grosor del diseño
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }, // Customizado a la derecha
  },
};
</script>

<template>
  <div
    class="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg flex flex-col justify-between w-100"
  >
    <!-- header de la card -->
    <div class="flex items-start gap-4 mb-6">
      <div class="p-3 bg-[#c8304cc1] text-white rounded-xl">
        <AlertTriangle class="w-6 h-6" />
      </div>

      <div>
        <h3 class="text-xl font-bold text-gray-800">Burnout Risk Level</h3>
        <p class="text-sm text-gray-500">Nivel de riesgo en agotamiento académico.</p>
      </div>
    </div>

    <div class="text-4xl font-extrabold text-[#d63031] mb-8 px-2">27 %</div>
    <h4 class="font-bold text-gray-700 mb-4">Distribución de riesgo</h4>

    <div class="flex items-center justify-between gap-4 h-48 mb-6">
      <div class="w-1/2 h-full relative">
        <Doughnut :data="chartData" :options="chartOptions" />
      </div>
      <div class="w-1/2 space-y-3 text-sm font-semibold text-gray-600">
        <div class="flex items-center gap-3">
          <span class="w-4 h-4 rounded-full bg-[#e15252]"></span> Alto (27%)
        </div>
        <div class="flex items-center gap-3">
          <span class="w-4 h-4 rounded-full bg-[#f0932b]"></span> Medio (31%)
        </div>
        <div class="flex items-center gap-3">
          <span class="w-4 h-4 rounded-full bg-[#7f76ff]"></span> Bajo (26%)
        </div>
        <div class="flex items-center gap-3">
          <span class="w-4 h-4 rounded-full bg-[#22a6b3]"></span> Muy bajo (16%)
        </div>
      </div>
    </div>
    <!-- mensaje de riesgo -->
    <div
      class="bg-[#c8304cd0] text-white p-3 rounded-xl flex items-center gap-3 text-xs font-medium"
    >
      <div>
        <SmilePlus class="w-4 h-4 text-white" />
      </div>
      <p>El riesgo aumenta en estudiantes que usan IA más de 10hrs por semana.</p>
    </div>
  </div>
</template>
