<template>
  <div class="basis-1/2 max-lg:basis-full my-10">
    <Managetext
      v-for="({ text, title }, index) in items"
      :head="title"
      :key="index"
      :id="`0${index + 1}`"
    >
      {{ text }}
    </Managetext>
  </div>
</template>

<script setup>
import Managetext from "@/components/main/Managetext.vue";
import { reactive } from "vue";
import data from "@/data/appFeatures.json";

const items = reactive(data);
</script>
