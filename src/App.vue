<template>
  <div class="bg-img bg-no-repeat 2xl:bg-[70rem_-10rem] xl:bg-[50rem_-10rem]">
    <Navbar></Navbar>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/header/Navbar.vue";
import Footer from "./components/footer/Footer.vue";
import Main from "./components/main/Main.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Footer,
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style lang=""></style>
