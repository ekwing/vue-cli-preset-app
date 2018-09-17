import axios from 'axios'
import config from '@/config'

// 默认配置
axios.defaults.timeout = 10000

// 外部接口配置
const axiosDefault = axios.create()
axiosDefault.interceptors.request.use(config => config, err => Promise.reject(err))
axiosDefault.interceptors.response.use(res => res.data)

// 内部接口配置
const axiosApi = axios.create()
axiosApi.defaults.baseURL = config.apiBaseURL
axiosApi.interceptors.request.use(config => config,
  err => Promise.reject(err)
)
axiosApi.interceptors.response.use(({data: {data, status}}) => {
  if (status === 0) return data
  return Promise.reject(data)
}, err => {
  return Promise.reject(err)
})

export default axiosApi
export {axiosDefault}
