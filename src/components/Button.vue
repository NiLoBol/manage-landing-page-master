<template lang="">
  <a
    v-if="!condition"
    :class="[
      'lg:text-lg text-sm font-semi bg-BrightRed text-white p-3 rounded-full  px-6',
      { 'hover:cursor-pointer': pointer },{'shadow-BrightRed/60 shadow-lg':shadow}
    ]"
  >
    <slot></slot>
  </a>
  <a
    v-else
    className="lg:text-lg text-sm bg-white text-BrightRed font-bold p-3 rounded-full px-6 hover:cursor-pointer"
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "Button",
  props: { condition: Boolean, pointer: Boolean , shadow:Boolean},
};
</script>
<style lang=""></style>
