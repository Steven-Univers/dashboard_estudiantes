<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement, 
  LineElement,   
  Filler        
} from 'chart.js'

import { Bar, Line } from 'vue-chartjs' 
import { Clock3 } from 'lucide-vue-next'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
)

/* ================= BAR CHART (Prompt Engineering) ================= */
const barData = {
  labels: ['1', '2', '3', '4', '5'],
  datasets: [
    {
      label: 'Estudiantes',
      data: [9, 19, 34, 25, 13],
      backgroundColor: [
        '#A7F3D0', 
        '#6EE7B7', 
        '#34D399', 
        '#059669', 
        '#047857'
      ],
      borderRadius: 4,
      barThickness: 16
    }
  ]
}

/* ================= LINE CHART (Weekly GenAI Hours) ================= */
const lineData = {
  
  labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
  datasets: [
    {
      label: 'Horas Promedio',
      data: [4.5, 5.8, 6.2, 6.7, 7.1, 6.4, 6.9],
      borderColor: '#0D9488', 
      backgroundColor: 'rgba(13, 148, 136, 0.1)', 
      tension: 0.4, 
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: '#0D9488'
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
}

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      grid: {
        color: '#F3F4F6' 
      },
      ticks: {
        font: { size: 10 }
      }
    },
    x: {
      grid: {
        display: false 
      },
      ticks: {
        font: { size: 10 }
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-6 w-full">

    <div class="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div class="flex items-start gap-4 mb-6">
        <div class="w-11 h-11 rounded-xl bg-indigo-900 flex items-center justify-center text-white shrink-0">
          <Clock3 :size="20" />
        </div>
        <div>
          <h2 class="text-xl font-bold text-gray-900">
            Prompt Engineering Skill
          </h2>
          <p class="text-gray-400 text-xs mt-0.5">
            Nivel de habilidad que tienen los estudiantes usando IA
          </p>
        </div>
      </div>

      <div class="grid grid-cols-[1.8fr_1.2fr] gap-6 items-center">
        <div class="border-r border-gray-100 pr-4">
          <h4 class="text-indigo-900 font-semibold text-xs mb-4">
            Distribución por nivel
          </h4>
          <div class="h-36">
            <Bar :data="barData" :options="chartOptions" />
          </div>
          <div class="flex justify-between text-[10px] text-gray-400 mt-2 px-1">
            <span>Muy bajo</span>
            <span>Muy alto</span>
          </div>
        </div>

        <div class="bg-indigo-950 text-white rounded-xl p-4 text-xs font-medium leading-relaxed">
          <span>Se observa mejora moderada en habilidades a mayor uso de AI.</span>
        </div>
      </div>
    </div>

    <div class="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div class="flex items-start gap-4 mb-4">
        <div class="w-11 h-11 rounded-xl bg-teal-600 flex items-center justify-center text-white shrink-0">
          <Clock3 :size="20" />
        </div>
        <div>
          <h2 class="text-xl font-bold text-gray-900">
            Weekly GenAI Hours
          </h2>
          <p class="text-gray-400 text-xs mt-0.5">
            Nivel promedio de la habilidad en ingeniería de prompts.
          </p>
        </div>
      </div>

      <div class="flex items-baseline gap-2 mb-4 border-b border-gray-100 pb-4">
        <span class="text-4xl font-bold text-teal-600">6.7</span>
        <span class="text-gray-400 text-xs">horas / semana</span>
      </div>

      <div>
        <h4 class="text-teal-700 font-semibold text-xs mb-3">
          Evolución de uso semanal
        </h4>
        <div class="h-40">
          <Line :data="lineData" :options="lineOptions" />
        </div>
      </div>
    </div>

  </div>
</template>