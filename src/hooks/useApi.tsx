import { useCallback, useState } from 'react'
import { ApiRoutes } from '../constants/apiRoutes'
import { api } from '../lib/api'

// NEED TO BE FIXED

export function useApi() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const get = useCallback(async <T,>(url: ApiRoutes): Promise<{ data: T }> => {
    setIsLoading(true)
    setError(null)

    await delay(1)

    try {
      const response = await api.get(url)
      const { data } = response
      setIsLoading(false)
      return { data }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      setIsLoading(false)
      console.error(errorMessage)
      return { data: null }
    }
  }, [])

  const post = useCallback(
    async <T,>(url: string, body: object): Promise<{ data: T }> => {
      setIsLoading(true)
      setError(null)

      await delay(3)

      try {
        const response = await api.post(url, body)
        const { data } = response
        setIsLoading(false)
        return { data }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'An error occurred'
        setError(errorMessage)
        setIsLoading(false)
        console.error(errorMessage)
        return { data: null }
      }
    },
    [],
  )

  return { get, post, isLoading, error }
}

function delay(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}
