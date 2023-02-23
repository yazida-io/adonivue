import axios from 'axios'
import useAuthenticationStore from '../stores/useAuthenticationStore'

const instance = axios.create({
  baseURL: `${window.location.protocol}//${window.location.host}/api`,
})

instance.interceptors.request.use((config) => {
  const authStore = useAuthenticationStore()

  const token = authStore.token

  if (!!token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      alert(error?.response?.status)
    }
    return error
  }
)

const $get = <T>(uri, params = {}, config = {}) =>
  instance.get<T>(uri, { params, ...config }).then(({ data }) => data)

const $post = <T>(uri, data: any = [], config = {}) =>
  instance.post<T>(uri, data, config).then(({ data }) => data)

const $put = <T>(uri, data: any = [], config = {}) =>
  instance.put<T>(uri, data, config).then(({ data }) => data)

const $delete = <T>(uri, params = {}, config = {}) =>
  instance.delete<T>(uri, { params, ...config }).then(({ data }) => data)

export default () => ({ $get, $post, $delete, $put })
