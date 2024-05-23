<template>
  <form class="flex flex-row flex-nowrap">
    <label for="email">Subscribe your email to get updates:</label>
    <input
      id="email"
      class="text-lg font-semi text-black focus-visible:outline-none mx-5 p-3 rounded-full px-6 max-2xl:w-[80%]"
      type="email"
    />
    <Button :pointer="true">Go</Button>
  </form>
</template>
<script>
import Button from "@/components/Button.vue";

export default {
  name: "FooterForm",
  components: {
    Button,
  },
};
</script>
