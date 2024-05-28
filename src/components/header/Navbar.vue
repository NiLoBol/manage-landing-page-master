<template>
  <div class="container mx-auto md:pt-16 md:py-16">
    <div class="flex flex-row items-center py-10 h-20">
      <Logo />
      <div class="xl:basis-2/4 md:w-auto flex flex-row max-md:hidden">
        <div class="text-NAV">Pricing</div>
        <div class="text-NAV">Product</div>
        <div class="text-NAV">About Us</div>
        <div class="text-NAV">Careers</div>
        <div class="text-NAV">Community</div>
      </div>
      <div class="xl:basis-1/4 lg:basis-1/5 max-md:hidden text-end">
        <Button pointer="true" shadow="true">Get Started</Button>
      </div>
      <div class="max-lg:basis-1/12 md:hidden">
        <img
          :src="menu"
          alt="Menu"
          width="25"
          height="25"
          @click="switchmanubar"
        />
      </div>
    </div>
  </div>
  <div
    v-if="menubar"
    class="fixed w-screen h-screen bg-gradient-to-b from-white/0 to-VeryDarkBlue/80 z-10 touch-none "
  >
    <div class="w-4/5 h-[350px] bg-white z-20 absolute top-10 left-10 flex flex-col  ">
      <div class="text-NAV text-center my-5">Pricing</div>
      <div class="text-NAV text-center my-5">Product</div>
      <div class="text-NAV text-center my-5">About Us</div>
      <div class="text-NAV text-center my-5">Careers</div>
      <div class="text-NAV text-center my-5">Community</div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import Logo from "./Logo.vue";

export default {
  name: "Navbar",
  data() {
    return {
      menubar: false,
      menu: "/images/icon-hamburger.svg",
    };
  },
  components: {
    Button,
    Logo,
  },
  methods: {
    switchmanubar() {
      if (this.menubar) {
        this.menu = "/images/icon-hamburger.svg"
      } else {
        this.menu= "/images/icon-close.svg"
      }
      this.menubar = !this.menubar;
      console.log(this.menubar);
      console.log(this.menu);
    },
  },
};
</script>

<style scoped lang=""></style>
