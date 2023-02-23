<template>
  <div class="h-screen w-screen bg-stone-100 flex-center">
    <form class="p-4 flex-center flex-col bg-white rounded-xl space-y-7">
      <label class="flex flex-col items-start w-full relative">
        <span
          class="absolute -top-2 px-2 rounded-full text-xs text-stone-600 bg-indigo-100 uppercase"
        >
          Login
        </span>
        <input
          type="email"
          name="email"
          class="px-3 py-2 bg-stone-100 rounded"
          placeholder="elon@spacex.com"
          v-model="email"
        />
      </label>
      <label class="flex flex-col w-full bg-stone-100 rounded relative">
        <span
          class="absolute -top-2 px-2 rounded-full text-xs text-stone-600 bg-indigo-100 uppercase"
        >
          Password
        </span>
        <input
          type="password"
          name="password"
          class="px-3 py-2 bg-stone-100 rounded"
          placeholder="********"
          v-model="password"
        />
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
import { useRouter } from 'vue-router'
import authenticationStore from '../stores/useAuthenticationStore'

const authStore = authenticationStore()

const router = useRouter()

const email = ref('')
const password = ref('')

const authenticate = async () => {
  authStore.authenticate(email.value, password.value).then(async () => {
    if (authStore.isAuthenticated) {
      await router.push({ name: 'home' })
    }
  })
}
</script>
