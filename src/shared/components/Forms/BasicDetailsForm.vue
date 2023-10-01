<script setup>
import {useRegistrationStore} from "@/shared/stores/registrationStore.js";
import MazInput from 'maz-ui/components/MazInput'
import MazRadioButtons from "maz-ui/components/MazRadioButtons.mjs";
import MazPicker from 'maz-ui/components/MazPicker'
import {useRouter} from "vue-router";


const registrationStore = useRegistrationStore()

const props = defineProps(['nextPage', 'isValid'])

const genderOptions = [
  {
    value: "male",
    label: "Male"
  },
  {
    value: "female",
    label: "Female"
  },
]
const router = useRouter()

const handleSubmit = (evt) => {
  evt.preventDefault()
  if (props.isValid)
    router.push(props.nextPage)
}
</script>

<template>
  <form class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 md:gap-8 items-end" @submit="handleSubmit">
    <p class="underline font-medium text-2xl md:col-span-2">Basic Information</p>
    <MazInput
        v-model="registrationStore.firstName"
        label="First Name"
        required
    />
    <MazInput
        v-model="registrationStore.lastName"
        label="Last Name"
        required
    />
    <MazPicker
        v-model="registrationStore.DOB"
        label="Date of birth"
        required
    />

    <div class="flex flex-col gap-1">
      <p class="font-semibold cursor-pointer">Gender</p>
      <MazRadioButtons
          v-model="registrationStore.gender"
          :options="genderOptions"
          required
      />
    </div>

    <button  class="primary-btn lg:w-32 md:col-span-2 mt-20 ">Submit</button>
  </form>
</template>

<style scoped>

</style>