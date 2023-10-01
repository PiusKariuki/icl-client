<script setup>
import {useRegistrationStore} from "@/shared/stores/registrationStore.js";
import MazInput from 'maz-ui/components/MazInput'
import MazPicker from 'maz-ui/components/MazPicker'
import {useRouter} from "vue-router";


const registrationStore = useRegistrationStore()
const props = defineProps(['isValid', 'nextPage'])

const router = useRouter()


const handleSubmit = (evt) => {
  evt.preventDefault()
  if (props.isValid)
    router.push(props.nextPage)
}


</script>

<template>
  <form class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 md:gap-8 items-end" @submit="handleSubmit">
    <p class="underline font-medium text-2xl md:col-span-2">Vitals</p>
    <MazPicker
        v-model="registrationStore.vitalsDate"
        label="Date"
        required
    />
    <MazInput
        v-model="registrationStore.centimeters"
        label="Height(cm)"
        required
        type="Number"
    />
    <MazInput
        v-model="registrationStore.kilograms"
        label="Weight(kg)"
        required
        type="Number"
    />
    <div class="flex flex-col border-[1px] h-full justify-center px-2 rounded-lg bg-gray-100 text-gray-500">
      <p class="text-xs font-light">BMI</p>
      {{registrationStore.bmi}}
    </div>


    <button class="primary-btn lg:w-32 md:col-span-2 mt-20 " type="submit">Submit</button>
  </form>
</template>

<style scoped>

</style>