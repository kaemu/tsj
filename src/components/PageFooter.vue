<script setup>
import { ref } from 'vue'
import { DateTime } from 'luxon'
const year = ref(DateTime.now().year)
</script>

<template>
  <section class="bg-stone-700">
    <div class="inner text-sm md:text-xs !md:py-2 flex flex-col space-y-2 xl:flex-row xl:space-x-8 xl:space-y-0">
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
  </section>
</template>

<style scoped>
</style>
