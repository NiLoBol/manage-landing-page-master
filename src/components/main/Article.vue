<template>
  <article
    v-for="({ img, text, name }, index) in items"
    :key="index"
    class="xl:w-[30%] md:w-1/2 max-lg:w-4/5 bg-VeryLightGray md:p-20 md:pt-0 p-5 mx-10 my-16"
  >
    <div class="flex flex-row justify-center">
      <div class="relative -top-10 max-lg:-top-14">
        <img class="w-20 h-20" :src="img" :alt="`${name}'s face`" />
      </div>
    </div>

    <div class="text-2xl text-DarkBlue font-bold mb-10">
      {{ name }}
    </div>
    <p class="text-sub">{{ text }}</p>
  </article>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import data from "../../data/peopleOpinion.json";

const items = reactive(data);
</script>
