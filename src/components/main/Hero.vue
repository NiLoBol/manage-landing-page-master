<template>
  <section
    class="flex flex-wrap md:flex-row max-lg:flex-col-reverse container mx-auto md:p-10 p-0"
  >
    <section class="basis-1/2 max-lg:basis-full max-md:mx-10">
      <h1 class="text-H1 mt-20">
        Bring everyone together to build better products.
      </h1>
      <p class="text-sub xl:w-[400px] my-10">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <div class="mt-16 mb-20 max-lg:text-center">
        <Button :pointer="true" :shadow="true">Get Started</Button>
      </div>
    </section>

    <div class="basis-1/2 max-lg:basis-full">
      <img
        src="/images/illustration-intro.svg"
        class="mx-auto aspect-square max-lg:mt-20"
        alt=""
      />
    </div>
  </section>
</template>
<script setup>
import Button from "../Button.vue";
</script>
