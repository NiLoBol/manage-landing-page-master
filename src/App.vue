<template lang="">
  <div class="bg-img bg-no-repeat 2xl:bg-[70rem_-10rem] xl:bg-[50rem_-10rem]">
    <Navbar></Navbar>
    <div
      class="flex flex-wrap md:flex-row max-lg:flex-col-reverse container mx-auto max-lg:p-10 max-lg:p-0"
    >
      <div class="basis-1/2 max-lg:basis-full">
        <div class="text-H1 mt-20">
          Bring everyone together to build better products.
        </div>
        <div class="text-sub xl:w-[400px] my-10">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </div>
        <div class="mt-16 mb-20">
          <Button pointer="true">Get Started</Button>
        </div>
      </div>

      <div class="basis-1/2 max-lg:basis-full">
        <img
          src="/images/illustration-intro.svg"
          class="xl:w-[800px] xl:h-[800px] max-w-[80w] max-lg:mt-20"
          alt=""
        />
      </div>
    </div>
    <div class="bg-img bg-no-repeat 2xl:bg-[-25rem_25rem] xl:bg-[-25rem_25rem]">
      <div class="flex flex-wrap flex-row container mx-auto">
        <div class="basis-1/2 max-lg:basis-full">
          <div class="text-H2 my-10">What’s different about Manage?</div>
          <div class="text-sub font-sub">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </div>
        </div>
        <div class="basis-1/2 max-lg:basis-full my-10">
          <Managetext ID="01" head="Track company-wide progress">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </Managetext>
          <Managetext ID="02" head="Advanced built-in reports"
            >Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </Managetext>
          <Managetext ID="03" head="Everything you need in one place">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </Managetext>
        </div>
      </div>
      <Person></Person>
    </div>
    <div
      class="lg:bg-sd bg-sm bg-BrightRed bg-no-repeat xl:h-52 lg:h-64 h-84 py-20 bg-[13rem_-6rem]"
    >
      <div
        class="flex flex-wrap flex-row container mx-auto items-center max-lg:text-center"
      >
        <div class="text-white text-5xl lg:basis-1/2 basis-full font-bold">
          Simplify how your team works today.
        </div>
        <div
          class="lg:basis-1/2 basis-full flex flex-row-reverse max-lg:justify-center max-lg:my-10"
        >
          <Button condition="true " pointer="true">Get Started</Button>
        </div>
      </div>
    </div>
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
            <div class="basis-full mb-14 mx-auto max-md:mt-12">
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
              class="basis-full w-full flex flex-row flex-wrap max-lg:justify-between max-md:p-20 md:px-10 lg:p-0 lg:hidden"
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
              class="text-lg font-semi text-black focus-visible:outline-none mx-5 p-3 rounded-full px-6 max-2xl:w-[80%]"
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
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Managetext from "./components/Managetext.vue";
import Navbar from "./components/Navbar.vue";
import Person from "./components/Person.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Button,
    Managetext,
    Person,
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style lang=""></style>
