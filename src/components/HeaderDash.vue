<script setup lang="ts">
import { Menu } from 'lucide-vue-next'

const emit = defineEmits(['toggle-sidebar'])

const handleMenuClick = () => {
  emit('toggle-sidebar')
}
// import { ChevronDown, Menu } from 'lucide-vue-next'
</script>

<template>
  <header class="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-7">

    <div class="grid grid-cols-2">
      <div>
        <button @click="handleMenuClick" class="text-[#7B009D] hover:text-[#5f256e]">
          <Menu class="w-6 h-6" />
        </button>
      </div>
      <div>
        <p class="text-gray-800 font-bold text-xl">Dashboard</p>
      </div>
    </div>

     <div class="flex items-center gap-4"> <!-- gap es la separacion foto y nombre -->
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
        alt="avatar"
        class="w-11 rounded-xl border border-[#4F4899] p-0.5 object-cover"
      />
      <p class="text-gray-700 font-medium text-md">Lic. Irving</p>
    </div>
  </header>
</template>
