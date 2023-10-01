<script setup>

import FormPage from "@/shared/Pages/FormPage.vue";
import OverweightForm from "@/shared/components/Forms/OverweightForm.vue";
import {useRegistrationStore} from "@/shared/stores/registrationStore.js";
import {useFetch} from "@/shared/composables/Fetch.js";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import Swal from "sweetalert2";

const registrationStore = useRegistrationStore()
const state = reactive({
  loading: false
})

const router = useRouter()


const registerPatient = async (evt) => {
  evt.preventDefault()

  state.loading = true
  const {status, data, loading} = await useFetch("/patients", {method: "POST", data: {...registrationStore}})
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