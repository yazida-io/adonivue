import { useLocalStorage } from '@vueuse/core'

const auth = ({ next }) => {
  const token = useLocalStorage('client-auth-token', null)
  return token.value ? next() : next({ name: 'login' })
}

const guest = ({ next }) => {
  const token = useLocalStorage('client-auth-token', null)
  return !token.value ? next() : next({ name: 'home' })
}

export { auth, guest }
