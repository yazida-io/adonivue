<template>
  <v-sheet tag="section" class="h-screen flex-center">
    <div class="flex flex-col gap-5">
      <div class="flex justify-center items-center">
        <v-btn variant="text" icon="mdi-google" size="100" class="bg-white shadow" />
      </div>
      <v-card
        class="flex flex-col p-4 border-2 border-indigo-200"
        rounded="xl"
        width="400"
        variant="outlined"
        elevation="0"
      >
        <v-card-text class="flex flex-col gap-3">
          <v-text-field
            hide-details="auto"
            label="Email"
            placeholder="musk@spacex.com"
            type="email"
            variant="filled"
            class="overflow-hidden rounded-lg"
            v-model="email"
            :rules="[required]"
          />
          <v-text-field
            rounded="xl"
            label="Password"
            type="password"
            placeholder="•••••••"
            v-model="password"
            :rules="[required]"
          />
          <v-btn
            block
            size="large"
            color="primary"
            variant="flat"
            rounded="lg"
            class="-mt-3 text-white"
            @click="submit"
          >
            Sign In
          </v-btn>
          <div class="text-right hover:text-indigo-500">
            <a href="#">Forgot password ?</a>
          </div>
        </v-card-text>

        <v-card-text>
          <v-divider>or</v-divider>
        </v-card-text>

        <v-card-text class="flex justify-center gap-3">
          <v-btn
            v-for="({ driver, icon, color }, index) in providers"
            :key="index"
            size="large"
            :color="color"
            :icon="icon"
            variant="tonal"
            rounded="xl"
            @click="oAuthRedirect(driver)"
          />
        </v-card-text>
      </v-card>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import authenticationStore from '../stores/useAuthenticationStore'

const authStore = authenticationStore()

const router = useRouter()

const providers = ref<{ driver: string; icon: string; color: string }[]>([
  { driver: 'linkedin', icon: 'mdi-linkedin', color: 'blue' },
  { driver: 'github', icon: 'mdi-github', color: 'black' },
  { driver: 'twitter', icon: 'mdi-twitter', color: 'blue' },
  { driver: 'google', icon: 'mdi-google', color: 'red' },
])

const email = ref('')
const password = ref('')

const required = (v: any) => !!v || 'Field is required'

const submit = () =>
  authStore.authenticate(email.value, password.value).then(() => {
    router.push({ name: 'home' })
  })

const oAuthRedirect = (driver: string) => (window.location.href = `/oauth/${driver}/redirect`)
</script>
