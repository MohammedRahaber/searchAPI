const { Pool } = require('pg')

const pool = new Pool({
  user: 'process.ENV.USER',
  host: 'process.ENV.HOST',
  database: 'process.ENV.DB',
  password: 'process.ENV.DBPASS',
  port: process.ENV.PORT
  // keepAlive: true,
  // idleTimeoutMillis: 0,
  // connectionTimeoutMillis: 0,
})

module.exports={pool}
