<script setup>

import FormPage from "@/shared/Pages/FormPage.vue";
import OverweightForm from "@/shared/components/Forms/OverweightForm.vue";
import {useRegistrationStore} from "@/shared/stores/registrationStore.js";
import {reactive} from "vue";
import {useRoute, useRouter} from "vue-router";
import Swal from "sweetalert2";
import {useFetch} from "@/shared/composables/Fetch.js";

const registrationStore = useRegistrationStore()
const state = reactive({
  loading: false
})

const router = useRouter()
const route = useRoute()

const registerPatient = async (evt) => {

  evt.preventDefault()
  state.loading = true
  const {status, error} = await useFetch(`patients/${route.params.patientId}`, {
    method: "POST",
    data: {...registrationStore}
  })
  console.log('error', error.value)
  state.loading = false
  if (status.value === 201) {
    Swal.fire({
      icon: "success",
      timer: 1000
    })
    await registrationStore.$reset()
    await router.push("/")
  }

}

</script>

<template>
  <FormPage>
    <OverweightForm
        :is-valid="registrationStore.isOverweightFormValid"
        :loading="state.loading"
        :submit-action="registerPatient"
    />
  </FormPage>
</template>

<style scoped>

</style>