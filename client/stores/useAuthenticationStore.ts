import { defineStore } from 'pinia'
import useApi from '../composable/useApi'
import { useStorage } from '@vueuse/core'
import { AuthResponse } from '../types/user'

const { $post } = useApi()

const authenticationStore = defineStore({
  id: 'authentication',
  state: () => ({
    token: useStorage('client-auth-token', '', localStorage),
    user: useStorage('client-auth-user', { id: '', name: '', email: '' }, localStorage),
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUser(user: any) {
      this.user = user
    },
    async authenticate(email: string, password: string) {
      await $post<AuthResponse>('login', { email, password }).then(({ token, user }) => {
        this.setToken(token)
        this.setUser(user)
      })
    },
    async logout() {
      await $post('logout')
      this.setToken('')
      this.setUser({ id: '', name: '', email: '' })
    },
  },
  getters: {
    isAuthenticated() {
      return !!this.token
    },
  },
})

export default authenticationStore
