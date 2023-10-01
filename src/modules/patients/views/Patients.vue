
  <script setup>

    import {useFetch} from "@/shared/composables/Fetch.js";
    import {patientTableHeaders} from "@/modules/patients/config/tableConfig.js";
    import {onMounted, reactive, ref, watch} from "vue";
    import Spinner from "@/shared/components/Spinners/Spinner.vue";
    import MazInput from 'maz-ui/components/MazInput'
    import MazPicker from 'maz-ui/components/MazPicker'
    import {useRouter} from "vue-router";
    import {getAgeFromDOB, getBMI, getDateTime} from "@/modules/patients/helpers/helpers.js";

    const router = useRouter()

    const state = reactive({
      items: [],
      unfilteredItems: [],
      loading: false,
      startDate: "",
      endDate: ""
    })

    const getAllPatients = async () => {
      state.loading = true
      const {data} = await useFetch('/patients/all', {method: 'GET'})
      state.items = data.value
      state.unfilteredItems = data.value
      state.loading = false
    }

    onMounted(() => {
      getAllPatients()
    })

    const searchField = ref(["patientId.firstName", "patientId.lastName"])
    const searchValue = ref("")


    watch(() => state.startDate, value => {
      if (state.startDate)
        state.items = state.unfilteredItems.filter(item => new Date(item.createdAt).getTime() >= new Date(value).getTime())
    })


    watch(() => state.endDate, value => {
      if (state.endDate)
        state.items = state.unfilteredItems.filter(item => new Date(item.createdAt).getTime() <= new Date(value).getTime())
    })

    const clearFilters= () =>{
      state.items = state.unfilteredItems
      state.startDate = ""
      state.endDate =""
      searchValue.value = ""
    }

  </script>

  <template>
    <div class="flex flex-col px-2 py-4 bg-gray-100 rounded-lg border-[1px]">
      <spinner :load="state.loading" class="self-center"/>
      <div class="flex w-full flex-col">
        <div class="flex items-center justify-between">
          <p class="text-2xl font-semibold mb-8">Patients</p>
          <button
              class="primary-btn"
              @click="router.push('/registration')">
            <font-awesome-icon icon="fa-solid fa-plus"/>
            Add New
          </button>
        </div>

        <div class="flex items-center gap-8 my-8 flex-wrap w-full">
          <maz-input v-model="searchValue"  placeholder="Search..." class="w-full lg:w-52"/>
          <MazPicker v-model="state.startDate" label="Start Date" class="w-full lg:w-52"/>
          <MazPicker v-model="state.endDate" label="End Date" class="w-full lg:w-52"/>
          <button
              @click="clearFilters"
              class="outline-btn border-red-500 text-red-500 ml-auto justify-end hover:bg-red-500 hover:text-white">
            Clear filters
          </button>
        </div>

        <EasyDataTable
            :headers="patientTableHeaders"
            :items="state.items"
            :search-field="searchField"
            :search-value="searchValue"
            table-class-name="customize-table"
        >

          <template #item-createdAt="item">
            <div class="" v-html="getDateTime(item.createdAt)"/>
          </template>

          <template #item-fullName="item">
            <p class="text-xs lg:text-base">{{ item.patientId.firstName }} {{ item.patientId.lastName }}</p>

          </template>

          <template #item-DOB="item">
            <p class="text-xs lg:text-base">{{ getAgeFromDOB(item.patientId.DOB) }} y.o</p>

          </template>

          <template #item-BMI="item">
            <div
                :class="[getBMI({kg: item.kilograms, cm: item.centimeters}) === 'underweight'? 'bg-amber-500':
            getBMI({kg: item.kilograms, cm: item.centimeters}) === 'normal'? 'bg-info':
            getBMI({kg: item.kilograms, cm: item.centimeters}) === 'overweight'?'bg-red-400': 'bg-red-700']"
                class="text-xs lg:text-base text-white font-semibold flex justify-center rounded-3xl lg:w-32 px-4 py-1 lg:py-0">
              {{ getBMI({kg: item.kilograms, cm: item.centimeters}) }}
            </div>
          </template>
        </EasyDataTable>
      </div>

    </div>

  </template>