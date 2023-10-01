<script setup>
import {useRouter} from "vue-router";

const headers = [
  {text: "First Name", value: "firstName"},
  {text: "DONOR ID", value: "donorId"},
  {text: "Test Reason", value: "reasonForTest"},
  {text: "Client", value: "employerLocation"},
  {text: "Drug urine test", value: "urineTests"},
  {text: "Hair drug test", value: "hairTests"},
  {text: "Alcohol tests", value: "alcoholTests"},
  {text: "Start Date Time", value: "futureStartTime"},
  {text: "Test Result", value: "result"},
  {text: "Notes", value: "notes"},
];

const props = defineProps(['items', 'loading', 'refetch'])

const router = useRouter()

const handleRowClick = (row) => {
  if (row.id)
    router.push(`/admin/pdf`)
}
</script>

<template>
  <div class="flex flex-col w-full">
    <spinner :load="loading" class="self-center" />
    <EasyDataTable
        v-if="!loading"
        :headers="headers"
        :items="items"
        table-class-name="customize-table"
        @click-row="handleRowClick"
    >

      <template #item-firstName="item">
        <p class="underline text-blue-500 cursor-pointer font-medium">
          {{ item.firstName }} {{item.lastName}}
        </p>
      </template>


      <template #item-employerLocation="item">
        <div class="w-40 truncate">
          {{ item.employerLocation}}
        </div>

      </template>

      <template #item-urineTests="item">
        <div class="flex flex-col gap-2">
          <div
              v-for="item in item.urineTests"
              :key="item.id"
              class="cta px-3 py-1 text-xs rounded-2xl w-28 truncate">
            {{ item.name }}
          </div>
        </div>
      </template>

      <template #item-hairTests="item">
        <div class="flex flex-col gap-2">
          <div
              v-for="item in item.hairTests"
              :key="item.id"
              class="cta px-3 py-1 text-xs rounded-2xl w-28 truncate">
            {{ item.name }}
          </div>
        </div>
      </template>

      <template #item-alcoholTests="item">
        <div class="flex flex-col gap-2">
          <div
              v-for="item in item.alcoholTests"
              :key="item.id"
              class="cta px-3 py-1 text-xs rounded-2xl w-28 truncate">
            {{ item.name }}
          </div>
        </div>
      </template>

      <template #item-futureStartTime="item">
        <div class="flex gap-2">
          <p class="">
            {{ item.futureStartDate }}
          </p>
          <p class="">
            {{ item.futureStartTime }}
          </p>
        </div>
      </template>

    </EasyDataTable>
  </div>



</template>
