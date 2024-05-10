<script setup>
import { computed, watch, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

import { i18n } from '../i18n.js'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

import Button from '../components/Button.vue'
import MainNav from '../components/MainNav.vue'
import PageFooter from '../components/PageFooter.vue'
import Swiper from '../components/Swiper.vue'
import InstagramLogo from '../components/InstagramLogo.vue'
import Acces from '../components/Acces.vue'

const LaTourIntro = defineAsyncComponent(() => import(`../content/${lang.value}/la-tour-intro.md`))
const LaTour = defineAsyncComponent(() => import(`../content/${lang.value}/la-tour.md`))
const LaVisite = defineAsyncComponent(() => import(`../content/${lang.value}/la-visite.md`))
const LaVisiteExperience = defineAsyncComponent(() => import(`../content/${lang.value}/la-visite-experience.md`))
const Horaires = defineAsyncComponent(() => import(`../content/${lang.value}/horaires.md`))
const Tarifs = defineAsyncComponent(() => import(`../content/${lang.value}/tarifs.md`))

const route = useRoute()
const lang = computed(() => route.params.lang)
watch(lang, () => {
  i18n.global.locale.value = lang.value
}, {
  immediate: true
})

</script>

<template>
  <MainNav />

  <section class="w-full h-[70vh] md:h-[640px] relative">
    <div class="w-screen h-full absolute overflow-hidden">
      <img
        class="max-w-[200vw] pl-[-12px] md:h-auto md:w-screen md:object-fill object-center"
        src="https://magmacultura.com/wp-content/uploads/2023/07/Magmacultura_TourSaintJaqcques0.jpg"
      />
    </div>
    <div class="inner relative grid content-center h-full z-10">
      <div class="flex flex-col space-y-8">
        <div>
          <h1 class="text-white text-[2.7rem] leading-[1.2em] md:text-6xl font-jacques pb-4">
            Tour<br />
            Saint-Jacques
          </h1>
          <p class="text-white font-thin w-1/2 text-2xl leading-relaxed">
            Paris
          </p>
        </div>
        <div class="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
          <div class="flex">
            <Button class="btn-orange" href="https://boutique.toursaintjacques.fr">
              {{ $t("Billeterie") }}
            </Button>
          </div>
          <div class="flex">
            <Button class="text-white" href="#la-visite">
                {{ $t("Infos visite") }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full">
    <div class="inner md:text-center md:text-xl font-jacques p-leading-loose">
      <LaTourIntro />
      <div class="mt-12 w-full max-w-[1000px] m-auto overflow-hidden flex items-center justify-between">
        <img src="/logo-paris.png" class="h-20 lg:h-32" />
        <img src="/logo-unesco.png" class="h-28 lg:h-32" />
        <img src="/logo-monument-historique.png" class="h-24 lg:h-32" />
        <img src="/logo-st-jacques-de-compostelle.png" class="h-20 lg:h-32" />
      </div>
    </div>
  </section>


  <section class="w-full bg-stone-100">
    <div class="inner md:text-center md:text-xl">
      <Swiper />
    </div>
  </section>

  <section class="w-full" id="la-tour">
    <div class="inner prose">
      <LaTour />
    </div>
  </section>

  <hr />

  <section class="w-full" id="la-visite">
    <div class="grid w-full md:grid-cols-3">
      <div class="md:col-span-2">
        <div class="inner-left inner-y prose">
          <LaVisite />
          <div class="flex mt-8">
            <Button class="btn-orange" href="https://boutique.toursaintjacques.fr">
              {{ $t("Acheter un Billet en ligne") }}
            </Button>
          </div>
        </div>
      </div>
      <div class="mt-12 md:mt-0 bg-visit">
        <div class="inner-y inner-right inner-left md:pl-16 prose-text-white side-text">
          <LaVisiteExperience />
        </div>
      </div>
    </div>
  </section>
  
  <hr />
  
  <section class="w-full" id="la-visite">
    <div class="inner">
      <div class="w-full grid md:grid-cols-3 gap-20 md:gap-16" id="infos">
        <div class="text-sm space-y-4">
          <Tarifs />
        </div>
        <hr class="-pt-[5vw] md:hidden" />
        <div class="text-sm space-y-4">
          <Horaires />
        </div>
        <hr class="md:hidden" />
        <div class="text-sm space-y-4">
          <Acces />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-stone-100">
    <div class="inner">
      <p class="text-xl font-jacques leading-relaxed">
        {{ $t("Pour rester au courant de nos actualités, suivez-nous sur notre") }}
        <a class="pl-2 text-link flex items-center space-x-2 flex-nowrap !no-underline" href="https://www.instagram.com/toursaintjacques">
          <InstagramLogo class="inline w-4 h-4" />
          <div>instagram</div>
          <ArrowRightIcon class="inline w-6 h-6" />
        </a>
      </p>
      <hr class="my-6" />
      <p class="text-base">
        {{ $t("Nous contacter :") }}
        <a class="text-link" href="mailto:contact@toursaintjacques.fr">contact@toursaintjacques.fr</a>
      </p>
    </div>
  </section>

  <PageFooter />
</template>

<style scoped>
.bg-visit {
  background-image: url('/visit.jpg');
  background-position: center center;
  background-size: cover;
}
.side-text .markdown-body p {
  @apply leading-tight;
}
</style>
