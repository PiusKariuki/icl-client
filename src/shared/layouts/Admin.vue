<template>
  <div>
    <Sidebar />
    <div class="relative md:ml-64 bg-white ">
      <admin-navbar />
      <div class="px-4 md:px-10 mx-auto py-12 w-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "@/shared/components/Sidebar/Sidebar.vue";
import AdminNavbar from "@/shared/components/Navbars/AdminNavbar.vue";

</script>
