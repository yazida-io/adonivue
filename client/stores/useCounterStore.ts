import { defineStore } from 'pinia'

const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
  getters: {
    doubleCount() {
      return this.count * 2
    },
  },
})

export default useCounterStore
