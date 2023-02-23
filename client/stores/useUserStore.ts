import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'John Doe',
    email: '',
    age: 0,
  }),
  actions: {
    setName(name: string) {
      this.name = name
    },
    setEmail(email: string) {
      this.email = email
    },
    setAge(age: number) {
      this.age = age
    },
  },
  getters: {
    isAdult() {
      return this.age >= 18
    },
  },
})

export default useUserStore
