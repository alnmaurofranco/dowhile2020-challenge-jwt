interface Server {
  port: number
}

export default {
  port: process.env.PORT || 8080,
} as Server
