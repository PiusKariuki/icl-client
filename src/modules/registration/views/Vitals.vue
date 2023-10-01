<script setup>

import FormPage from "@/shared/Pages/FormPage.vue";
import VitalsForm from "@/shared/components/Forms/VitalsForm.vue";
import {useRegistrationStore} from "@/shared/stores/registrationStore.js";

const registrationStore = useRegistrationStore()

</script>

<template>
  <FormPage>
    <vitals-form :is-valid="registrationStore.isVitalsFormValid"
                 :next-page="registrationStore.bmi < 25 ? '/registration/underweight': '/registration/overweight'"/>
  </FormPage>
</template>

<style scoped>

</style>