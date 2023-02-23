import useAuthenticationStore from '../stores/useAuthenticationStore'

const auth = ({ next }) => {
  const auth = useAuthenticationStore()
  return auth.isAuthenticated ? next() : next({ name: 'login' })
}

export default auth
