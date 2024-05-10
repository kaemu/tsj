<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useScroll, useScrollLock } from '@vueuse/core'

import Button from './Button.vue'

const route = useRoute()
const lang = computed(() => route.params.lang)

const el = ref(document)
const { y, isScrolling, directions, arrivedState } = useScroll(el)
const show = ref(true)
const opened = ref(false)
const isLocked = useScrollLock(el)
watch (opened, () => {
  isLocked.value = opened.value
})

watch([y, isScrolling], () => {
  if (arrivedState.bottom || directions.top || y.value < 12*4) {
    show.value = true
  } else if (directions.bottom) {
    show.value = false
  }
})

watch()

</script>

<template>
  <nav
    role="navigation"
    class="fixed h-12 bg-blackjacques w-full z-50 user-select-none transition-transform linear duration-500"
    :class="{
      'md:-translate-y-12': !show
    }"
  >
    <div id="menu" class="block relative z-10">
      <input type="checkbox" v-model="opened" />
      <span></span>
      <span></span>
      <span></span>
      <ul class="nav-items">
        <li class="hidden md:block"><a href="#la-tour">{{ $t("La tour") }}</a></li>
        <li class="hidden md:block"><a href="#la-visite">{{ $t("La visite") }}</a></li>
        <li class="hidden md:block"><a href="#infos" tag="a">{{ $t("Infos pratiques") }}</a></li>
        <li class="grow"></li>
        <li class="hidden md:block" v-if="lang !== 'fr'"><a href="/fr">Français</a></li>
        <li class="hidden md:block" v-if="lang !== 'en'"><a href="/en">English</a></li>
        <li>
          <Button href="https://boutique.toursaintjacques.fr" class="btn-orange mr-4">
            {{ $t("Billeterie") }}
          </Button>
        </li>
      </ul>
      <ul class="mobile-nav" @click="opened = false">
        <li><a href="#la-tour">{{ $t("La tour") }}</a></li>
        <li><a href="#la-visite">{{ $t("La visite") }}</a></li>
        <li><a href="#infos" tag="a">{{ $t("Infos pratiques") }}</a></li>
        <hr class="opacity-10 my-12" />
        <li><a href="/fr">Français</a></li>
        <li><a href="/en">English</a></li>        
      </ul>
    </div>
  </nav>
</template>

<style scoped>

.mobile-nav {
  @apply pointer-events-none top-0 h-0 w-screen transition-all duration-300 ease-in;
  @apply bg-blackjacques -translate-x-[50vw] opacity-0;
  @apply pt-24;
}
#menu input:checked ~ ul.mobile-nav {
  @apply translate-x-0 opacity-100 pointer-events-auto h-screen;
}
.mobile-nav li {
  @apply px-12 py-4 text-xl text-white text-center;
}

nav .nav-items>li>a {
  @apply text-white cursor-pointer transition-colors text-opacity-60 hover:text-opacity-100 uppercase text-xs tracking-wider;
}

#menu a
{
  transition: color 0.3s ease;
}

#menu>input
{
  -webkit-touch-callout: none;
  @apply block opacity-0 sm:hidden w-8 h-8 absolute top-2 left-2 z-20 cursor-pointer;
}

span {
  @apply block sm:hidden absolute w-8 h-0.5 bg-white;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menu>span:nth-child(2)
{
  @apply top-4 left-4;
  transform-origin: left top;
}
#menu>span:nth-child(3)
{
  transform-origin: center center;
  @apply top-6 left-4;
}
#menu>span:nth-child(4)
{
  @apply top-8 left-4;
  transform-origin: left bottom;
}

#menu>input:checked ~ span:nth-child(2)
{
  opacity: 1;
  transform: rotate(45deg) translate(3.75px, -7.5px);
  background-color: white;
}

#menu>input:checked ~ span:nth-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menu>input:checked ~ span:nth-child(4)
{
  transform: rotate(-45deg) translate(3.75px, +7.5px);
}
.nav-items {
  @apply md:px-10 w-full h-12 flex flex-row space-x-6 space-x-10 items-center;
}
.nav-items>li {
  @apply m-0 p-0 whitespace-nowrap;
}
</style>
