import { z } from 'zod'
import { API_URL } from '@env'

const envSchema = z.object({
  API_URL: z.string().url(),
})

export const vars = {
  API_URL,
}

// const parsedEnv = envSchema.safeParse(process.env)

// if (!parsedEnv.success) {
//   console.error('Missing envs: ', parsedEnv.error.flatten().fieldErrors)
//   throw new Error('Missing envs')
// }

// export const env = parsedEnv.data
