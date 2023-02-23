<template>
  <hello-world message="Welcome to your new Adonis + Vue.js app." />
  <router-link
    :to="{ name: 'logout' }"
    class="px-2 py-2 bg-red-100/70 hover:bg-red-100/70 rounded-full mt-7"
  >
    <svg class="w-8 h-8 fill-orange-700/70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"
      />
    </svg>
  </router-link>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>
