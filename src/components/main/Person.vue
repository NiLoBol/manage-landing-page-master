<template>
  <div class="basis-full text-H2 my-10 text-center">What they’ve said</div>
  <div
    class="overflow-y-hidden scroll-w-0 touch-auto webkit-box text-center cursor-grab active:cursor-grabbing"
    ref="scrollContainer"
  >
    <Article />
  </div>
  <div class="text-center mt-20 mb-44">
    <Button :pointer="true">Get Started</Button>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import Button from "../Button.vue";
import Article from "@/components/main/Article.vue";

export default {
  name: "Person",
  setup() {
    const scrollContainer = ref(null);

    onMounted(() => {
      const container = scrollContainer.value;
      let isDown = false;
      let startX;
      let scrollLeft;

      container.addEventListener("mousedown", (e) => {
        isDown = true;
        container.classList.add("active");
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });

      container.addEventListener("mouseleave", () => {
        isDown = false;
        container.classList.remove("active");
      });

      container.addEventListener("mouseup", () => {
        isDown = false;
        container.classList.remove("active");
      });

      container.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = x - startX; // ค่าตัวคูณเพื่อเพิ่มความเร็วในการเลื่อน
        container.scrollLeft = scrollLeft - walk;
      });
    });

    return {
      scrollContainer,
    };
  },
  components: {
    Button,
    Article,
  },
  mounted() {
    const scrollContainer = this.$el.querySelector("#scrollContainer");
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      console.log(scrollLeft);
    });

    scrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mouseup", () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 3; // ค่าตัวคูณเพื่อเพิ่มความเร็วในการเลื่อน
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  },
};
</script>
<style lang=""></style>
