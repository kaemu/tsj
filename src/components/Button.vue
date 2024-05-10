<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

defineProps({
  to: {
    type: String
  },
  href: {
    type: String
  },
})
</script>

<template>
  <a :href="href" :to="to" class="uppercase md:text-xs tracking-wider cursor-pointer group px-6 py-2 md:py-3 rounded-full transition-all flex center-items space-x-2">
    <div><slot /></div>
    <ArrowRightIcon class="w-4 transition-transform ease-out duration-300 group-hover:translate-x-1" />
  </a>
</template>

<style scoped>
.btn-orange {
  @apply bg-[#F07B4D] hover:brightness-[90%] hover:saturate-[130%] text-white shadow-lg;
}
</style>
