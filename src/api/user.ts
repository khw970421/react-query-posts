import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com'

class HttpClient {
  private axios: AxiosInstance

  constructor(baseURL: string) {
    this.axios = axios.create({
      baseURL
    });
  }

  setUpInterceptors() {
    this.axios.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  getPosts(postId: number) {
    return this.axios.get(`/posts/${postId}`)
  }

  getInfinitePosts(start: number, limit: number) {
    return this.axios.get(`/posts?_start=${start}&_limit=${limit}`)
  }

  getComments(postId: number) {
    return this.axios.get(`comments?postId=${postId}`)
  }
}

const HttpInstance = new HttpClient(baseURL)
export default HttpInstance