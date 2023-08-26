const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    "user": "root",
    "password": "",
    "database": "landing_page",
    "host": "localhost",
    "port": 3306,
    "waitForConnections": true,
    "enableKeepAlive": true
  })

module.exports = pool