<template>
  <nav
      class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
          class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <font-awesome-icon icon="fa-solid fa-bars"/>
      </button>
      <!-- Brand -->
      <router-link
          class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          to="/"
      >
        ICL DASHBOARD
      </router-link>

      <!-- Collapse -->
      <div
          class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
          v-bind:class="state.collapseShow"
      >
        <!-- Collapse header -->
        <div
            class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                  class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  to="/"
              >
                ICL DASHBOARD
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                  class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  type="button"
                  v-on:click="toggleCollapseShow('hidden')"
              >
                <font-awesome-icon icon="fa-solid fa-times"/>
              </button>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full"/>
        <!-- Heading -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none pl-0 ">
                <router-link
                    v-for="item in routes"
                    :key="item.name"
                    v-slot="{ href, navigate, isActive }"
                    :to="item.path"
                >
                  <a
                      :class="[
                              isActive
                                ? 'text-blue-500 hover:text-blue-600 bg-blue-100'
                                : 'text-blueGray-700 hover:text-blueGray-500',
                            ]"
                      :href="item.path"
                      class="text-xs uppercase py-3 px-4 font-medium  block flex items-center gap-2 rounded-lg"
                      @click="navigate"
                  >
                    <font-awesome-icon :icon="item.meta.icon" />
                    {{ item.name }}

                  </a>
                </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
); }

<script setup>

import {reactive} from "vue";
import {useRouter} from "vue-router";
import {routes} from "@/shared/router/router.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";



const state = reactive({
  collapseShow: "hidden"
})

const toggleCollapseShow = (classes) => {
  state.collapseShow = classes
}


const router = useRouter()


</script>
