import { useState } from 'react'
import { ApiRoutes } from '../constants/apiRoutes'
import { api } from '../lib/api'

// NEED TO BE FIXED

export function useApi() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState(null)

  async function get<T>(
    url: ApiRoutes,
  ): Promise<{ data: T | null; error: string | null; isLoading: boolean }> {
    setIsLoading(true)
    setData(null)
    setError(null)

    return await api
      .get(String(url))
      .then((res) => {
        const { data } = res
        setData(data as T)
        return { data: data as T, error: null, isLoading: false }
      })
      .catch((err) => {
        setError(err)
        return {
          data: null,
          error: err.message || 'An error occurred',
          isLoading: false,
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  async function post<T>(
    url: ApiRoutes,
    body: object,
  ): Promise<{ data: T | null; error: string | null; isLoading: boolean }> {
    setIsLoading(true)
    setData(null)
    setError(null)

    return await api
      .post(String(url), body)
      .then((res) => {
        const { data } = res
        setData(data as T)
        return { data: data as T, error: null, isLoading: false }
      })
      .catch((err) => {
        setError(err)
        return {
          data: null,
          error: err.message || 'An error occurred',
          isLoading: false,
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { get, post, data, isLoading, error }
}
