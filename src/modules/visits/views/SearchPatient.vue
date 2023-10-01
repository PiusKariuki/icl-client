<script setup>

import {reactive} from "vue";
import {useFetch} from "@/shared/composables/Fetch.js";
import {useRouter} from "vue-router";
import MazInput from 'maz-ui/components/MazInput'


const state = reactive({
  firstName: "",
  lastName: "",
  isDropdownVisible: false,
  patientsList: [],
  loading: false
})

const getPatients = async () => {
  state.loading = true
  const {status, data} = await useFetch(`/patients?fname=${state.firstName}&lname=${state.lastName}`, {method: 'GET'})
  state.isDropdownVisible = status.value == 200

  state.patientsList = data.value
  state.loading = false
}

const router = useRouter()

const handleOptionClick = (id) => {
  router.push(`/visits/vitals/${id}`)
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <p class="text-2xl underline">Enter the patients name</p>
    <div class="max-w-xl relative mb-2">
      <div class="flex gap-2 justify-between item-center w-full mb-2">
        <MazInput v-model="state.firstName" label="First Name" placeholder="First Name" @keyup="getPatients"/>
        <MazInput v-model="state.lastName" label="Last Name" placeholder="First Name" @keyup="getPatients"/>
      </div>

      <div
          v-if="state.isDropdownVisible"
          class="flex flex-col p-[11px] gap-2 w-full  abs z-20 bg-white  left-0 border-[1px] rounded-b-md
           lg:rounded-[13px] items-center "
          @click.stop="">
        <spinner :load="state.loading"/>


        <div
            v-if="!state.loading"
            class="grid grid-cols-3 mb-4 w-full ">
          <div class="font-medium text-lg text-info">First Name</div>
          <div class="font-medium text-lg text-info">Last Name</div>
          <div class="font-medium text-lg text-info">DOB</div>
        </div>
        <div
            v-for="(item, idx) in state.patientsList"
            v-if="!state.loading"
            :key="idx"
            class="grid grid-cols-3 text-sm font-semibold hover:bg-info/20 px-2 py-2 rounded-lg w-full "
            @click="handleOptionClick(item._id)">
          <div class="">{{ item.firstName }}</div>
          <div class="">{{ item.lastName }}</div>
          <div class="">{{ new Date(item.DOB).toLocaleDateString() }}</div>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>