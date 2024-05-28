
<template>
  <section
    class="bg-img bg-no-repeat 2xl:bg-[-25rem_25rem] xl:bg-[-25rem_25rem]"
  >
    <div class="flex flex-wrap flex-row container mx-auto">
      <div class="basis-1/2 max-lg:basis-full">
        <div class="text-H2 my-10 max-lg:text-center">What’s different about Manage?</div>
        <div class="text-sub font-sub max-lg:mx-10">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </div>
      </div>
      <div class="basis-1/2 max-lg:basis-full my-10 ">
        <Managetext ID="01" head="Track company-wide progress">
          See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of details. Never lose sight of the bigger picture again.
        </Managetext>
        <Managetext ID="02" head="Advanced built-in reports"
          >Set internal delivery estimates and track progress toward company
          goals. Our customisable dashboard helps you build out the reports you
          need to keep key stakeholders informed.
        </Managetext>
        <Managetext ID="03" head="Everything you need in one place">
          Stop jumping from one service to another to communicate, store files,
          track tasks and share documents. Manage offers an all-in-one team
          productivity solution.
        </Managetext>
      </div>
    </div>
    <Person />
  </section>
</template>
<script setup>
import Managetext from "./Managetext.vue";
import Person from "./Person.vue";
</script>
