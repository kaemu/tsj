<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useScroll, useScrollLock } from '@vueuse/core'

import { ticketsUrl } from '../routes.js'
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
const showButton = ref(false)
watch([y, isScrolling], () => {
  if (arrivedState.bottom || directions.top || y.value < 12*4) {
    show.value = true
  } else if (directions.bottom) {
    show.value = false
  }
  showButton.value = y.value > 200
})

</script>

<template>
  <nav
    role="navigation"
    class="fixed  bg-blackjacques w-full z-50 user-select-none transition-transform linear duration-500"
    :class="{
      'md:-translate-y-12': !show
    }"
  >
    <ul class="mobile-nav z-10" :class="{ opened }" @click="opened = false">
      <li><a href="#la-tour">{{ $t("La tour Saint-Jacques") }}</a></li>
      <li><a href="#la-visite">{{ $t("La visite") }}</a></li>
      <li><a href="#infos" tag="a">{{ $t("Infos pratiques") }}</a></li>
      <li><hr class="opacity-10 !px-0" /></li>
      <li class="flex">
        <a class="w-1/2" href="/fr">Français</a>
        <a class="w-1/2" href="/en">English</a>
      </li>
      <li><hr class="opacity-10 !px-0" /></li>
      <li class="!px-0">
        <Button :aria-label="$t('Billeterie')" :href="ticketsUrl" class="btn-orange mx-24">
          {{ $t("Billeterie") }}
        </Button>
      </li>
    </ul>
    <div id="menu" class="block relative z-20">
      <input aria-label="Open Menu" type="checkbox" v-model="opened" />
      <span></span>
      <span></span>
      <span></span>
      <ul role="menu" class="nav-items">
        <li role="menuitem" class="nav-item"><a href="#la-tour">{{ $t("La tour") }}</a></li>
        <li role="menuitem" class="nav-item"><a href="#la-visite">{{ $t("La visite") }}</a></li>
        <li role="menuitem" class="nav-item"><a href="#infos" tag="a">{{ $t("Infos pratiques") }}</a></li>
        <li role="none" class="grow"></li>
        <li role="menuitem" class="nav-item" v-if="lang !== 'fr'"><a href="/fr">Français</a></li>
        <li role="menuitem" class="nav-item" v-if="lang !== 'en'"><a href="/en">English</a></li>
        <li role="menuitem" class="transition-opacity items-center h-full opacity-0 md:opacity-100" :class="{ 'opacity-100': showButton }">
          <div class="flex item-center h-10 mr-4 mt-1 md:mt-2 md:mr-0">
            <Button :aria-label="$t('Billeterie')" :href="ticketsUrl" class="btn-orange">
              {{ $t("Billeterie") }}
            </Button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

/* mobile nav */
.mobile-nav {
  @apply pointer-events-none absolute h-screen w-screen transition-all duration-200 ease-in;
  @apply bg-blackjacques -translate-x-[20vw] opacity-0;
  @apply pt-24;
}
.mobile-nav.opened {
  @apply translate-x-0 opacity-100 pointer-events-auto h-screen block;
}
.mobile-nav li {
  @apply px-12 py-4 text-2xl text-white text-center;
}

/* header bar */
.nav-items {
  @apply h-12 md:px-10 w-full flex flex-row space-x-6 md:space-x-10 items-center;
}
.nav-item {
  @apply hidden md:block;
  @apply m-0 p-0 whitespace-nowrap;
}
.nav-item>a {
  @apply text-white transition-colors cursor-pointer text-opacity-60 hover:text-opacity-100 uppercase text-xs tracking-wider;
}

/* Hamburger */
#menu>input
{
  -webkit-touch-callout: none;
  @apply block opacity-0 md:hidden w-12 h-8 absolute top-2 left-4 z-20 cursor-pointer;
}
#menu>span {
  @apply block md:hidden absolute w-8 h-0.5 bg-white;
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
</style>
