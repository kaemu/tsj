<template>
  <div class="space-y-4">
    <Swiper class="mix-blend-multiply w-full max-w-[640px]" @swiper="setSwiper" style="-webkit-transform: translateZ(0)">
      <swiper-slide v-for="(_image, i) in images">
        <picture>
          <source type="image/webp" :srcset="`/slides/${(i+1)}.webp`" />
          <img :src="`/slides/${(i+1)}.jpg`" alt="Tour Saint-Jacques" loading="lazy" />
        </picture>
      </swiper-slide>
    </Swiper>
    <div class="w-full justify-center hidden md:flex">
      <div @click="prev" class="btn-controller">
        <ArrowLeftIcon name="arrow-left" class="w-4 h-4" />
      </div>
      <div @click="next" class="btn-controller">
        <ArrowRightIcon name="arrow-right" class="w-4 h-4" />
      </div>
    </div>
    <div class="grid grid-flow-col auto-cols-auto w-full justify-center">
      <div 
        class="cursor-pointer flex items-center mx-1 transition-colors w-2 h-2 rounded-full bg-stone-200"
        :class="{
          'bg-stone-400': (swiper && i === swiper.activeIndex)
        }"
        :key="`image${i}`"
        v-for="(_image, i) in images"
        @click="goto(i)" />
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref, computed, watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'
import 'swiper/css'

const images = Array(9)
const swiper = ref()
const setSwiper = (s) => {
  swiper.value = s
}
const currentImageSrc = computed(() => swiper.value ? props.images[swiper.value.activeIndex] : '')

const goto = (index) => {
  swiper.value?.slideTo(index)
}
const prev = () => {
  swiper.value?.slidePrev()
}
const next = () => {
  swiper.value?.slideNext()
}

const { arrowLeft, arrowRight } = useMagicKeys()

watch(arrowRight, () => {
  if (arrowRight.value) next()
})

watch(arrowLeft, () => {
  if (arrowLeft.value) prev()
})

</script>

<style scoped>
.btn-controller {
  @apply bg-stone-100 hover:bg-stone-200 cursor-pointer hover:text-stone-800 p-2 rounded-full text-blue-500 transition-colors;
}
</style>