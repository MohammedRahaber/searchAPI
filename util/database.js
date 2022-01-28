const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rahtest',
  password: 'wiznet',
  port: 5432
  // keepAlive: true,
  // idleTimeoutMillis: 0,
  // connectionTimeoutMillis: 0,
})

module.exports={pool}