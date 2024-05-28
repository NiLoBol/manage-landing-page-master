<template lang="">
  <div class="basis-full text-H2 my-10 text-center">What they’ve said</div>
  <div
    class="overflow-y-hidden scroll-w-0 touch-auto webkit-box text-center cursor-grab active:cursor-grabbing"
    ref="scrollContainer"
  >
    <article
      v-for="(item, index) in items"
      :key="index"
      class="xl:w-[40%] md:w-1/2 max-lg:w-4/5 bg-VeryLightGray md:pb-10 md:px-10 md:pt-0 p-5 pt-0 mx-10 my-16"
    >
      <div class="flex flex-row justify-center">
        <div class="relative -top-10 max-lg:-top-14 max-md:-top-9">
          <img class="w-20 h-20" :src="item.img" alt="" />
        </div>
      </div>

      <div class="text-2xl text-DarkBlue font-bold mb-10">
        {{ item.name }}
      </div>
      <div class="text-sub">“{{ item.text }}”</div>
    </article>
  </div>
  <div class="text-center mt-20 mb-44">
    <Button :pointer="true" :shadow="true">Get Started</Button>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import Button from "../Button.vue";

export default {
  name: "Person",
  setup() {
    const scrollContainer = ref(null);

    onMounted(() => {
      const container = scrollContainer.value;
      let isDown = false;
      let startX;
      let scrollLeft;
      container.scrollLeft = container.scrollWidth * 0.1;

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
  data() {
    return {
      items: [
        {
          img: "/images/avatar-ali.png",
          name: "Anisha Li",
          text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
        },
        {
          img: "/images/avatar-anisha.png",
          name: "Ali Bravo",
          text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
        },
        {
          img: "/images/avatar-richard.png",
          name: "Richard Watts",
          text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
        },
        {
          img: "/images/avatar-shanai.png",
          name: "Shanai Gough",
          text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without  being intrusive.",
        },
      ],
    };
  },
  components: {
    Button,
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
