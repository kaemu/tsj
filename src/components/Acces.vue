<script setup>
import { MapPinIcon } from '@heroicons/vue/24/solid'
import ParisMap from '../components/ParisMap.vue'
</script>

<template>
  <div class="p-m0">
    <h3>{{ $t("Accès") }}</h3>
    <h4>{{ $t("Adresse") }}</h4>
    <p>
      <a aria-label="Google Map" target="_blank" href="https://www.google.com/maps/place/Tour+Saint-Jacques/@48.858072,2.3463323,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1e5e72161b:0xe085e8b2d3c0632e!8m2!3d48.8580685!4d2.3489072!16zL20vMDNtZ2Zj?entry=ttu">
        <MapPinIcon class="inline w-6 text-red-500"/> 
      </a>
      39&nbsp;rue de Rivoli, 75004&nbsp;Paris
    </p>
    <h4>{{ $t("En métro") }}</h4>
    <p>
      {{ $t("Lignes") }}
      <span class="ratp-metro ratp-metro-1">1</span>
      <span class="ratp-metro ratp-metro-4">4</span>
      <span class="ratp-metro ratp-metro-7">7</span>
      <span class="ratp-metro ratp-metro-14">14</span>
        —&nbsp;Station Châtelet
    </p>
    <p>
      {{ $t("Lignes") }}
      <span class="ratp-metro ratp-metro-1">1</span>
      <span class="ratp-metro ratp-metro-11">11</span>
        —&nbsp;Station Hôtel&nbsp;de&nbsp;Ville
    </p>
    <h4>
      {{ $t("En bus") }}
    </h4>
    <p>
      {{ $t("Lignes") }}
      <span class="ratp-bus ratp-bus bg-indigo-600">38</span>
      <span class="ratp-bus ratp-bus bg-pink-500">47</span>
      <span class="ratp-bus ratp-bus bg-lime-700">58</span>
      <span class="ratp-bus ratp-bus bg-pink-500">67</span>
      <span class="ratp-bus ratp-bus bg-blue-300">69</span>
      <span class="ratp-bus ratp-bus bg-orange-600">70</span>
      <span class="ratp-bus ratp-bus bg-red-500">72</span>
      <span class="ratp-bus ratp-bus bg-lime-500">74</span>
      —&nbsp;Arrêt Châtelet
    </p>

    <h4>
      {{ $t("En RER") }}
    </h4>
    <p>
      {{ $t("RER A, B ou D - Station Châtelet-les-Halles, sortie Secteur Seine") }}
    </p>
    <div class="mt-6 flex items-start w-full">
      <div class="flex-grow">
        <h4>
          {{ $t("En voiture") }}
        </h4>
        <p>
          Parking Hôtel de Ville
        </p>
      </div>
      <div class="w-20">
        <a aria-label="Google Map" target="_blank" href="https://www.google.com/maps/place/Tour+Saint-Jacques/@48.858072,2.3463323,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1e5e72161b:0xe085e8b2d3c0632e!8m2!3d48.8580685!4d2.3489072!16zL20vMDNtZ2Zj?entry=ttu">
          <ParisMap class="mt-4 w-full h-16" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-m0 p {
  @apply m-0;
}
.p-m0 h4 {
  @apply mt-2 mb-1;
}
.ratp-bus {
  @apply mr-1 rounded text-white w-7 h-4 text-xs items-baseline inline-flex justify-center;
}
.ratp-metro {
  @apply mr-1.5 rounded-full  text-white w-5 h-5 text-sm items-baseline inline-flex justify-center;
}
.ratp-metro-1 {
  @apply bg-[#FFCE00];
}
.ratp-metro-4 {
  @apply  bg-[#C04191];
}
.ratp-metro-7 {
  @apply  bg-[#F3A4BA];
}
.ratp-metro-11 {
  @apply  bg-[#8D5E2A];
}
.ratp-metro-14 {
  @apply  bg-[#662483];
}
</style>
