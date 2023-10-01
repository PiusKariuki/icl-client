<script setup>

import FormPage from "@/shared/Pages/FormPage.vue";
import VitalsForm from "@/shared/components/Forms/VitalsForm.vue";
import {useRegistrationStore} from "@/shared/stores/registrationStore.js";
import {useRoute} from "vue-router";

const registrationStore = useRegistrationStore()
const route = useRoute()
</script>

<template>
  <FormPage>
    <vitals-form
        :is-valid="registrationStore.isVitalsFormValid"
        :next-page="registrationStore.bmi < 25 ? `/visits/underweight/${route.params.patientId}`: `/visits/overweight/${route.params.patientId}`"
    />
  </FormPage>
</template>

<style scoped>

</style>