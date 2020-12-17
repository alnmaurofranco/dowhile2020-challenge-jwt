import { CorsOptions } from 'cors'

interface Server {
  port: number
  origin?: string
  optionsCors: CorsOptions
}

const optionsCors: CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: process.env.API_URL,
  preflightContinue: false,
}

export default {
  port: parseInt(process.env.PORT as string, 10) || 8080,
  optionsCors,
} as Server
