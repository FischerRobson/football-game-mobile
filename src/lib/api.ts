import axios from 'axios'
import { vars } from '../env'

export const api = axios.create({
  baseURL: vars.API_URL,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
