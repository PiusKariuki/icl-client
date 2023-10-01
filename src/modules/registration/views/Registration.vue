<script setup>

import FormPage from "@/shared/Pages/FormPage.vue";
import BasicDetailsForm from "@/shared/components/Forms/BasicDetailsForm.vue";
import {useRegistrationStore} from "@/shared/stores/registrationStore.js";

const registrationStore = useRegistrationStore()

</script>

<template>
  <FormPage steps="">
    <basic-details-form :is-valid="registrationStore.isBasicFormValid" nextPage="/registration/vitals"/>
  </FormPage>
</template>

<style scoped>

</style>