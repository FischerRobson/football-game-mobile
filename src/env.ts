import { z } from 'zod'

const envSchema = z.object({
  API_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('Missing envs: ', parsedEnv.error.flatten().fieldErrors)
  throw new Error('Missing envs')
}

export const env = parsedEnv.data
