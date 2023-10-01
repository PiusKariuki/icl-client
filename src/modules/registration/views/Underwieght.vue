<script setup>

import FormPage from "@/shared/Pages/FormPage.vue";
import {useRegistrationStore} from "@/shared/stores/registrationStore.js";
import {useFetch} from "@/shared/composables/Fetch.js";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import Swal from "sweetalert2";
import UnderweightForm from "@/shared/components/Forms/UnderweightForm.vue";

const registrationStore = useRegistrationStore()
const state = reactive({
  loading: false
})

const router = useRouter()


const registerPatient = async (evt) => {
  if (!registrationStore.isUnderweightFormValid) return
  evt.preventDefault()

  state.loading = true
  const {status, data, loading} = await useFetch("/patients", {method: "POST", data: registrationStore.postObject})
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
    <UnderweightForm
        :is-valid="registrationStore.isUnderweightFormValid"
        :loading="state.loading"
        :submit-action="registerPatient"
    />
  </FormPage>
</template>

<style scoped>

</style>