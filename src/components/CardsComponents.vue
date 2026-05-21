<script setup lang="ts">
import { computed } from 'vue'
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
import type { StudentMetrics } from '@/models/student.model'

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

const props = defineProps<{
  students: StudentMetrics[]
  isLoading: boolean
}>()

const promptLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const

const promptSkillCounts = computed(() => {
  return promptLevels.map((level) =>
    props.students.filter((student) => student.Prompt_Engineering_Skill === level).length
  )
})

const weeklyAverage = computed(() => {
  if (!props.students.length) return 0

  const total = props.students.reduce((sum, student) => sum + student.Weekly_GenAI_Hours, 0)
  return total / props.students.length
})

const weeklySample = computed(() => {
  const sample = props.students.slice(0, 7).map((student) => student.Weekly_GenAI_Hours)

  if (sample.length === 7) return sample
  if (!sample.length) return [0, 0, 0, 0, 0, 0, 0]

  while (sample.length < 7) {
    sample.push(sample[sample.length - 1] ?? 0)
  }

  return sample
})

/* ================= BAR CHART (Prompt Engineering) ================= */
const barData = computed(() => ({
  labels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
  datasets: [
    {
      label: 'Estudiantes',
      data: promptSkillCounts.value,
      backgroundColor: ['#A7F3D0', '#6EE7B7', '#34D399', '#059669'],
      borderRadius: 4,
      barThickness: 16
    }
  ]
}))

/* ================= LINE CHART (Weekly GenAI Hours) ================= */
const lineData = computed(() => ({
  labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
  datasets: [
    {
      label: 'Horas Promedio',
      data: weeklySample.value,
      borderColor: '#0D9488',
      backgroundColor: 'rgba(13, 148, 136, 0.1)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: '#0D9488'
    }
  ]
}))

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
  <div class="flex flex-col gap-6 w-full lg:min-h-[34rem] min-w-0">

    <div class="w-full lg:flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer min-w-0">
      <div class="flex items-start gap-4 mb-4">
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

      <div class="grid grid-cols-1 md:grid-cols-[1.8fr_1.2fr] gap-5 md:gap-6 items-center min-w-0">
        <div class="md:border-r border-gray-100 md:pr-4 min-w-0">
          <h4 class="text-indigo-900 font-semibold text-xs mb-4">
            Distribución por nivel
          </h4>
          <div class="h-40 sm:h-36 lg:h-28 relative min-w-0">
            <Bar :data="barData" :options="chartOptions" />
          </div>
          <div class="flex justify-between text-[10px] text-gray-400 mt-2 px-1">
            <span>Muy bajo</span>
            <span>Muy alto</span>
          </div>
        </div>

        <div class="bg-indigo-950 text-white rounded-xl p-4 text-xs font-medium leading-relaxed min-w-0">
          <span>Se observa mejora moderada en habilidades a mayor uso de AI.</span>
        </div>
      </div>
    </div>

    <div class="w-full lg:flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer min-w-0">
      <div class="flex items-start gap-4 mb-3">
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

      <div class="flex flex-wrap items-baseline gap-2 mb-3 border-b border-gray-100 pb-3">
        <span class="text-4xl font-bold text-teal-600">
          {{ props.isLoading ? '...' : weeklyAverage.toFixed(2) }}
        </span>
        <span class="text-gray-400 text-xs">horas / semana</span>
      </div>

      <div>
        <h4 class="text-teal-700 font-semibold text-xs mb-3">
          Muestra de uso semanal (API)
        </h4>
        <div class="h-40 sm:h-36 lg:h-28 relative min-w-0">
          <Line :data="lineData" :options="lineOptions" />
        </div>
      </div>
    </div>

  </div>
</template>
