<template>
    <div class="bg-VeryDarkBlue p-10">
        <div
          class="flex flex-wrap flex-row max-md:flex-col-reverse  text-white container mx-auto"
        >
          <div
            class="xl:basis-1/4 md:basis-1/2 max-lg:basis-6/12 max-md:basis-full"
          >
            <div
              class="flex flex-row flex-wrap justify-center items-start max-md:flex-col-reverse gap-5 mt-5"
            >
              <div class="basis-full mb-6 mx-auto max-md:mt-10">
                <img class="h-10 mx-auto" src="/images/logo2.svg" alt="" />
              </div>
              <div class="basis-auto max-lg:hidden">
                <img class="w-8 h-8" src="/images/icon-facebook.svg" alt="" />
              </div>
              <div class="basis-auto max-lg:hidden">
                <img class="w-8 h-8" src="/images/icon-youtube.svg" alt="" />
              </div>
              <div class="basis-auto max-lg:hidden">
                <img class="w-8 h-8" src="/images/icon-twitter.svg" alt="" />
              </div>
              <div class="basis-auto max-lg:hidden">
                <img class="w-8 h-8" src="/images/icon-pinterest.svg" alt="" />
              </div>
              <div class="basis-auto max-lg:hidden">
                <img class="w-8 h-8" src="/images/icon-instagram.svg" alt="" />
              </div>
              <div
                class="basis-full w-full flex flex-row flex-wrap max-lg:justify-between max-md:p-0 md:px-10 lg:p-0 lg:hidden"
              >
                <div class="basis-auto">
                  <img class="w-8 h-8" src="/images/icon-facebook.svg" alt="" />
                </div>
                <div class="basis-auto">
                  <img class="w-8 h-8" src="/images/icon-youtube.svg" alt="" />
                </div>
                <div class="basis-auto">
                  <img class="w-8 h-8" src="/images/icon-twitter.svg" alt="" />
                </div>
                <div class="basis-auto">
                  <img class="w-8 h-8" src="/images/icon-pinterest.svg" alt="" />
                </div>
                <div class="basis-auto">
                  <img class="w-8 h-8" src="/images/icon-instagram.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="max-md:basis-1/4  md:basis-6/12 basis-3/12 flex flex-row">
            <div class="basis-1/2">
              <div class="my-2 text-lg">Home</div>
              <div class="my-2 text-lg">Pricing</div>
              <div class="my-2 text-lg">Products</div>
              <div class="my-2 text-lg">About Us</div>
            </div>
            <div class="basis-1/2">
              <div class="my-2 text-lg">Careers</div>
              <div class="my-2 text-lg">Community</div>
              <div class="my-2 text-lg">Privacy Policy</div>
            </div>
          </div>
  
          <div class="xl:basis-1/4 max-xl:basis-full my-5 xl:mx-0 lg:mx-20 ">
            <div class="flex flex-row flex-nowrap">
              <input
                class="text-lg font-semi text-black focus-visible:outline-none mx-5 md:p-3 p-0  rounded-full px-6 max-2xl:w-[80%]"
                type="text"
                placeholder="Updates in your inbox…"
              />
              <Button pointer="true">Go</Button>
            </div>
  
            <div
              class="text-lg mt-20 text-center text-DarkGrayishBlue max-lg:hidden"
            >
              Copyright 2020. All Rights Reserved
            </div>
          </div>
        </div>
        <div class="text-lg  text-center text-DarkGrayishBlue lg:hidden">
          Copyright 2020. All Rights Reserved
        </div>
      </div>
</template>

<script setup>
import Button from "../Button.vue";
</script>
