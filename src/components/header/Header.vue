<template>
  <header className="container  mx-auto ">
    <div className=" flex flex-row  items-center py-10 h-20 ">
      <Logo />
      <nav>
        <ul className="xl:basis-2/4 md:w-auto flex flex-row max-md:hidden">
          <li className="text-NAV">Pricing</li>
          <li className="text-NAV">Product</li>
          <li className="text-NAV">About Us</li>
          <li className="text-NAV">Careers</li>
          <li className="text-NAV">Community</li>
        </ul>
      </nav>
      <div className="xl:basis-1/4 lg:basis-1/5 max-md:hidden text-end">
        <Button :pointer="true">Get Started</Button>
      </div>
    </div>
  </header>
</template>
<script>
import Button from "../Button.vue";
import Logo from "@/components/header/Logo.vue";

export default {
  name: "Header",
  data() {
    return {};
  },
  components: {
    Button,
    Logo,
  },
};
</script>
<style lang=""></style>
