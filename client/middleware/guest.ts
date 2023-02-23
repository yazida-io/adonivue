import useAuthenticationStore from '../stores/useAuthenticationStore'

const guest = ({ next }) => {
  const auth = useAuthenticationStore()
  return !auth.isAuthenticated ? next() : next({ name: 'home' })
}

export default guest
