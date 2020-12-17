export default {
  url: process.env.DATABASE_URL,
  type: process.env.DATABASE_CONNECTION || 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  name: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
}
