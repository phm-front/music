import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface requestInterceptors {
  requestSuccessInterceptor?: (res: AxiosRequestConfig) => AxiosRequestConfig
  requestErrorInterceptor?: (err: any) => any
  responseSuccessInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseErrorInterceptor?: (err: any) => any
}

interface myConfigType extends AxiosRequestConfig {
  interceptors?: requestInterceptors
}

class MyRequest {
  instance: AxiosInstance
  interceptors?: requestInterceptors
  constructor(config: myConfigType) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 请求拦截 实例自定义
    this.instance.interceptors.request.use(
      this.interceptors?.requestSuccessInterceptor,
      this.interceptors?.requestErrorInterceptor
    )
    // 响应拦截 实例自定义
    this.instance.interceptors.response.use(
      this.interceptors?.responseSuccessInterceptor,
      this.interceptors?.responseErrorInterceptor
    )
    // 所有实例公用拦截器
    this.instance.interceptors.request.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request(config: AxiosRequestConfig): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get(config: AxiosRequestConfig): Promise<unknown> {
    return this.request({ ...config, method: 'GET' })
  }

  post(config: AxiosRequestConfig): Promise<unknown> {
    return this.request({ ...config, method: 'POST' })
  }

  delete(config: AxiosRequestConfig): Promise<unknown> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch(config: AxiosRequestConfig): Promise<unknown> {
    return this.request({ ...config, method: 'PATCH' })
  }
}
export default MyRequest
