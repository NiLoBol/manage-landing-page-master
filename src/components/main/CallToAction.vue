<template>
  <div
    class="lg:bg-sd bg-sm bg-BrightRed bg-no-repeat xl:h-52 lg:h-64 h-84 py-20 bg-[13rem_-6rem]"
  >
    <section
      class="flex flex-wrap flex-row container mx-auto items-center max-lg:text-center"
    >
      <div class="text-white text-5xl lg:basis-1/2 basis-full font-bold">
        Simplify how your team works today.
      </div>
      <div
        class="lg:basis-1/2 basis-full flex flex-row-reverse max-lg:justify-center max-lg:my-10"
      >
        <Button :condition="true" :pointer="true">Get Started</Button>
      </div>
    </section>
  </div>
</template>
<script setup>
import Button from "@/components/Button.vue";
</script>
