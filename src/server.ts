import { server } from '@config/index'
import express from 'express'
import cors from 'cors'
import 'reflect-metadata'
import './db'

import routes from './routes'

const app = express()

app.use(cors(server.optionsCors))
app.use(express.json())

app.use('/api', routes)

if (!server.port) process.exit(1)

app.listen(server.port, () => {
  console.log(
    `🚀 Server started on port http://localhost:${server.port} in mode ${process.env.NODE_ENV}`
  )
})
