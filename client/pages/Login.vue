<template>
  <div class="h-screen w-screen bg-pink-200 flex-center">
    <form class="shadow p-4 flex-center flex-col bg-indigo-50 rounded-xl">
      <label class="flex flex-col w-full">
        <span class="text-xs">Login</span>
        <input type="email" name="email" />
      </label>
      <label class="flex flex-col w-full">
        <span class="text-xs">Password</span>
        <input type="password" name="password" />
      </label>
      <button
        type="button"
        class="bg-indigo-800 text-white uppercase w-full py-2 px-4 rounded"
        @click="authenticate"
      >
        Login
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const token = useLocalStorage('client-auth-token', '')
const authenticate = async () => {
  token.value = '123'
  await router.push({ name: 'home' })
}
</script>
