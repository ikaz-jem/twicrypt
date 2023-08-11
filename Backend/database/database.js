const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    "user": "landing_page",
    "password": "LandingPage123",
    "database": "landing_page",
    "host": "localhost",
    "port": 3306,
    "waitForConnections": true,
    "enableKeepAlive": true
  })

module.exports = pool