<template >
  <div class="flex flex-row">
    <div class="basis-32 text-center items-center"><Button >{{ID}}</Button></div>
    <div class="basis-10/12 items-center">
        <div class="text-2xl font-bold text-DarkBlue">{{head}}</div>
        <div class="text-sub my-10 max-md:me-10">
            <slot ></slot>
        </div>
        
    </div>
  </div>
</template>
<script>
import Button from '../Button.vue'
export default {
  props: {
    ID: String,
    head: String
  },
  components:{
    Button
  }
};
</script>
<style lang=""></style>
