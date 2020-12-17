process.env.NODE_ENV === 'production'
  ? require('./dist/config/env')
  : require('./src/config/env')

const { database } = process.env.NODE_ENV === 'production'
  ? require('./dist/config')
  : require('./src/config')

module.exports = {
  type: 'postgres',
  host: database.host,
  port: database.port,
  username: database.username,
  password: database.password,
  database: database.name,
  synchronize: false,
  logging: false,
  entities: process.env.NODE_ENV === 'production'
    ? ['dist/models/*.js']
    : ['src/models/*.ts'],
  migrations: process.env.NODE_ENV === 'production'
    ? ["dist/db/migrations/*.js"]
    : ['src/db/migrations/*.ts'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/db/migrations',
  },
};
