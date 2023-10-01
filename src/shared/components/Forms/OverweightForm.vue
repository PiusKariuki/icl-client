<script setup>
import {useRegistrationStore} from "@/shared/stores/registrationStore.js";
import MazTextarea from 'maz-ui/components/MazTextarea'
import MazRadioButtons from "maz-ui/components/MazRadioButtons.mjs";
import MazPicker from 'maz-ui/components/MazPicker'
import Spinner from "@/shared/components/Spinners/Spinner.vue";


const registrationStore = useRegistrationStore()

defineProps(['submitAction', 'loading', 'isValid'])

const healthOptions = [
  {
    value: "good",
    label: "Good"
  },
  {
    value: "poor",
    label: "Poor"
  },
]

const drugOptions = [
  {
    value: true,
    label: "Yes"
  },
  {
    value: false,
    label: "No"
  },
]


</script>

<template>
  <form class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 md:gap-8 items-end" @submit="submitAction">
    <p class="underline font-medium text-2xl md:col-span-2">Overweight Form</p>
    <MazPicker
        v-model="registrationStore.healthReportDate"
        label="Date"
        required
    />

    <div class="flex flex-col gap-1">
      <p class="font-semibold cursor-pointer">General Health?</p>
      <MazRadioButtons
          v-model="registrationStore.generalHealth"
          :options="healthOptions"
          required
      />
    </div>

    <div class="flex flex-col gap-1">
      <p class="font-semibold cursor-pointer">Are you currently taking any drugs?</p>
      <MazRadioButtons
          v-model="registrationStore.onDrugs"
          :options="drugOptions"
          required
      />
    </div>

    <MazTextarea
        v-model="registrationStore.comments"
        label="Comments"
    />
    <spinner v-if="loading" :load="loading"/>

    <button :disabled="!isValid" v-else class="primary-btn lg:w-32 md:col-span-2 mt-20 ">Submit</button>
  </form>
</template>

<style scoped>

</style>