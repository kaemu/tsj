<script setup>
import { computed, watch, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

import { i18n } from '../i18n.js'
import { siteUrl, ticketsUrl } from '../routes.js'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

import Button from '../components/Button.vue'
import ReadMore from '../components/ReadMore.vue'
import MainNav from '../components/MainNav.vue'
import PageFooter from '../components/PageFooter.vue'
import Swiper from '../components/Swiper.vue'
import InstagramLogo from '../components/InstagramLogo.vue'
import Acces from '../components/Acces.vue'

const LaTourIntro = defineAsyncComponent(() => import(`../content/${lang.value}/la-tour-intro.md`))
const LaTour = defineAsyncComponent(() => import(`../content/${lang.value}/la-tour.md`))
const LaTourAujourdHui = defineAsyncComponent(() => import(`../content/${lang.value}/la-tour-aujourd-hui.md`))
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

const { t: $t } = i18n.global
const title = $t('Tour Saint-Jacques Paris - Site officiel')
const description = $t('Découvrez la majestueuse Tour Saint-Jacques, l’un des trésors architecturaux du patrimoine de la ville de Paris, qui domine la ville du haut de ses 54 mètres.')
const canonical = `${siteUrl}/${lang.value}`

useHead({
  htmlAttrs: {
    lang: lang.value
  },
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      'http-equiv': 'Content-Language',
      content: lang.value
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:URL',
      content: canonical
    },
    {
      property: 'og:image',
      content: `${siteUrl}/tour-saint-jacques-paris.jpg`
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: canonical
    }
  ],
})

</script>

<template>
  <MainNav />

  <section class="w-full min-h-[500px] h-[70vh] md:no-min-h md:h-[280px] lg:h-[640px] xl:h-[720px] relative">
    <div class="w-screen h-full absolute overflow-hidden">
      <picture>
          <source media="(max-width: 767px)" type="image/webp" srcset="/tour-saint-jacques-paris-mobile.webp" />
          <source media="(max-width: 768px)" type="image/webp" srcset="/tour-saint-jacques-paris.webp" />
          <img
            :alt="$t('Vue panoramique sur La Tour Saint-Jacques à Paris.')"
            class="w-full h-full object-cover object-top"
            src="/tour-saint-jacques-paris.jpg"
          />
        </picture>
    </div>
    <div class="inner top-8 relative grid content-center h-full z-10">
      <div class="flex flex-col space-y-8">
        <div>
          <h1 class="text-white text-[2.7rem] leading-[1.2em] md:text-6xl font-jacques pb-4">
            Tour<br />
            Saint-Jacques
          </h1>
          <p class="text-white font-light w-1/2 text-2xl leading-relaxed">
            Paris
          </p>
        </div>
        <div class="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
          <div class="flex">
            <Button :aria-label="$t('Billeterie')" class="btn-orange" :href="ticketsUrl">
              {{ $t("Billeterie") }}
            </Button>
          </div>
          <div class="flex">
            <Button :aria-label="$t('Infos visite')" class="text-white" href="#la-visite">
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
      <div class="mt-6 mb:mt-12 w-full max-w-[1000px] m-auto overflow-hidden flex items-center justify-between">
        <img :alt="$t('La Ville de Paris (logo)')" src="/logo/logo-paris-2.svg" class="h-20 lg:h-32" />
        <img :alt="$t('UNESCO (logo)')" src="/logo/logo-unesco.svg" class="h-28 lg:h-32" />
        <img :alt="$t('Les Monuments Historiques (logo)')" src="/logo/logo-monument-historique.svg" class="h-24 lg:h-32" />
        <img :alt="$t('Saint-Jacques de Compostelle (logo)')" src="/logo/logo-st-jacques-de-compostelle.svg" class="h-20 lg:h-32" />
      </div>
    </div>
  </section>

  <section class="w-full bg-stone-100">
    <div class="inner md:text-center md:text-xl">
      <Swiper />
    </div>
  </section>

  <section class="w-full" id="la-tour">
    <div class="inner prose h3-deco">
      <ReadMore>
        <LaTour />
      </ReadMore>
      <ReadMore>
        <LaTourAujourdHui />
      </ReadMore>
    </div>
  </section>

  <hr />

  <section class="w-full" id="la-visite">
    <div class="grid w-full md:grid-cols-6">
      <div class="md:col-span-4 lg:col-span-4">
        <div class="inner-left inner-y prose">
          <LaVisite />
          <div class="flex mt-8">
            <Button :aria-label="$t('Billeterie')" class="btn-orange m-auto md:m-0" :href="ticketsUrl">
              {{ $t("Acheter un Billet en ligne") }}
            </Button>
          </div>
        </div>
      </div>
      <div class="mt-12 md:mt-0 md:col-span-2 lg:col-span-2">
        <img :alt="$t('Visite guidée de la Tour Saint-Jacques')"  src="/visit.jpg" class="w-full" />
        <div class="px-6 pb-6 md:px-0 md:pr-8 md:py-4 side-text text-sm">
          <LaVisiteExperience />
        </div>
      </div>
    </div>
  </section>
  
  <hr />
  
  <section class="w-full" id="la-visite">
    <div class="inner">
      <div class="w-full grid md:grid-cols-3 gap-4 md:gap-16" id="infos">
        <div class="text-sm space-y-4">
          <Tarifs />
        </div>
        <hr class="md:hidden" />
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
        <a class="pl-2 text-link flex items-center space-x-2 flex-nowrap !no-underline" href="https://www.instagram.com/toursaintjacques_paris">
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
.side-text .markdown-body p {
  @apply leading-tight;
}
</style>
