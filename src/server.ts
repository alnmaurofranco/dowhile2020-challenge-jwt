import { server } from '@config/index'
import express from 'express'
import routes from './routes'
import 'reflect-metadata'
import './db'

const app = express()

app.use(express.json())

app.use('/api', routes)

app.listen(server.port, () => {
  console.log(
    `🚀 Server started on port http://localhost:${server.port} and mode ${process.env.NODE_ENV}`
  )
})
