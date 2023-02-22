<template>
  <div class="bg-indigo-50/30 rounded-xl p-10 flex-center flex-col space-y-10 backdrop-blur-lg">
    <img alt="Vue logo" src="../assets/images/logo.svg" />
    <h1 class="text-3xl">Adonis + Vue.js</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script lang="ts" setup>
defineProps<{ message: string }>()
</script>
