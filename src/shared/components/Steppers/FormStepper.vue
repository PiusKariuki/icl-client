<script setup>

import {formSteps} from "@/shared/config/formSteps.js";
import {useRoute} from "vue-router";




const props = defineProps(['steps', 'currentStep'])


/**
 *
 * @param link
 * @returns {boolean}
 */
const isActive = (step) => props.currentStep ===step


</script>

<template>
  <div class="flex flex-col gap-12 lg:gap-32 relative">

    <font-awesome-icon
        @click="$emit('close')"
       icon="fa-solid fa-angles-left"
        class="flex w-6 h-6 rounded-full self-end text-black lg:hidden"/>
    <div
        v-for="(item, index) in steps"
        :ikey="item.link"
        :class="isActive(item.step)  || item.step < currentStep? 'text-green-500' : 'text-black'"
        class="flex items-center gap-4 relative cursor-pointer">
      <div
          :class="isActive(item.link)? 'bg-emerald-100': 'bg-slate-200'"
          class="flex rounded-full w-10 h-10 items-center p-3 z-10">
        <font-awesome-icon
            :icon="item.step < currentStep ? 'fa-solid fa-check': item.icon"
            class="flex w-4 h-4 rounded-full"/>
      </div>

      <div class="flex flex-col gap-1">
        <h3 class="text-sm font-bold">{{ item.title }}</h3>
        <p class="text-sm ">{{ item.details }}</p>
      </div>
      <div
          v-if="index !== formSteps.length-1"
          class="w-[1px] h-14 lg:h-32 absolute bg-slate-300 -bottom-14 lg:-bottom-32 translate-x-5" />
    </div>

    
  </div>

</template>

<style scoped>

</style>