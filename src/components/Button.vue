<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    condition: { type: Boolean, default: false },
    pointer: { type: Boolean, default: false },
  },
  computed: {
    buttonClasses() {
      const classes = ["lg:text-lg", "text-sm", "p-3", "rounded-full", "px-6"];

      if (!this.condition) {
        classes.push("font-semi", "bg-BrightRed", "text-white");
        if (this.pointer) classes.push("hover:cursor-pointer");
      } else {
        classes.push(
          "bg-white",
          "text-BrightRed",
          "font-bold",
          "hover:cursor-pointer",
        );
      }

      return classes;
    },
  },
};
</script>
<style lang=""></style>
