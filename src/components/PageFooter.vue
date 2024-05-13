<script setup>
import { ref, computed } from 'vue'
import { DateTime } from 'luxon'
import { useRoute } from 'vue-router'

const year = ref(DateTime.now().year)
const route = useRoute()
const lang = computed(() => route.params.lang)
</script>

<template>
  <section class="bg-stone-700">
    <div class="inner flex-col space-y-4 !py-12 md:py-6">
      <a :href="`https://magmacultura.com/${lang}`" target="_blank" class="cursor-pointer group">
        <img src="/magmacultura.svg" class="h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
      </a>
      <div class="text-sm md:text-xs !md:py-2 flex flex-col space-y-2 xl:flex-row xl:space-x-8 xl:space-y-0">
        <p class="text-stone-400">
          © {{ year }} MagmaCultura - {{ $t("Tous droits reservés") }}
        </p>
        <p class="text-stone-400 hover:text-stone-100">
          <a target="_blank" href="https://boutique.toursaintjacques.fr//TSJ_Mentions_legales_01-06-2022.pdf">
            {{ $t("Mentions légales") }}
          </a>
        </p>
        <p class="text-stone-400 hover:text-stone-100">
          <a target="_blank" href="https://boutique.toursaintjacques.fr//TSJ_Politique_de_confidentialite_01-06-2022.pdf">
            {{ $t("Politique de confidentialité") }}
          </a>
        </p>
        <p class="text-stone-400 hover:text-stone-100">
          <a target="_blank" href="https://boutique.toursaintjacques.fr/CGV_Tour_Saint_Jacques.pdf">
            {{ $t("Conditions générales de vente") }}
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
