import useUserStore from './useUserStore'
import useAuthenticationStore from './useAuthenticationStore'
import useCounterStore from './useCounterStore'

export default () => {
  return {
    userStore: useUserStore,
    authenticationStore: useAuthenticationStore,
    counterStore: useCounterStore,
  }
}
