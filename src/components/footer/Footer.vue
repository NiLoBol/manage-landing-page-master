<template>
  <footer class="bg-VeryDarkBlue p-10">
    <div
      class="flex flex-wrap flex-row max-md:flex-col-reverse text-white container mx-auto"
    >
      <FooterIcons />
      <div class="max-md:basis-1/4 md:basis-6/12 basis-3/12 flex flex-row">
        <ul class="basis-1/2">
          <li
            v-for="(item, index) in firstRow"
            :key="index"
            class="my-2 text-lg"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="basis-1/2">
          <li
            v-for="(item, index) in lastRow"
            :key="index"
            class="my-2 text-lg"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="xl:basis-1/4 max-xl:basis-full my-5 xl:mx-0 lg:mx-20">
        <FooterForm />
        <div
          class="text-lg mt-20 text-center text-DarkGrayishBlue max-lg:hidden"
        >
          Copyright 2020. All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Button from "../Button.vue";
import FooterIcons from "@/components/footer/FooterIcons.vue";
import { reactive } from "vue";
import data from "@/data/footerItems01.json";
import lastData from "@/data/footerItems02.json";
import Article from "@/components/main/Article.vue";
import FooterForm from "@/components/footer/Form.vue";

export default {
  name: "Footer",
  components: {
    FooterForm,
    Article,
    Button,
    FooterIcons,
  },
  setup() {
    const firstRow = reactive(data);
    const lastRow = reactive(lastData);
    return {
      firstRow,
      lastRow,
    };
  },
};
</script>
