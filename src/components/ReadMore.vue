<template>
  <div :class="{
    'collapsed': collapsed
  }">
    <slot></slot>
  </div>
  <div class="w-full flex justify-center">
    <div v-if="collapsed" class="group flex hover:!no-underline space-x-1 items-center text-link text-center relative -mt-16 mb-16" @click="collapsed = false">
      <div>{{ $t("Lire la suite") }}</div>
      <ChevronRightIcon class="w-4 transition group-hover:rotate-90" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
const collapsed = ref(true)
</script>

<style scoped>
.collapsed {
  @apply h-[400px] transition overflow-hidden relative;
}
.collapsed:after {
  position: absolute;
  bottom: 0;  
  height: 100%;
  width: 100%;
  content: "";
  background: linear-gradient(to top,
     rgba(255,255,255, 1) 20%, 
     rgba(255,255,255, 0) 80%
  );
  pointer-events: none; /* so the text is still selectable */
}
</style>