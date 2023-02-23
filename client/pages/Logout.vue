<template>
  <p>login out ...</p>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import authenticationStore from '../stores/useAuthenticationStore'

const authStore = authenticationStore()

const router = useRouter()

onMounted(async () => {
  await authStore.logout()
  await router.push({ name: 'login' })
})
</script>
