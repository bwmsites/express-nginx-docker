const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'database-container',
    user: 'root',
    password: 'avaliacao',
    database: 'avaliacao'
  });

  try {
    db.connect()    
  } catch (error) {
    console.log('Database connection error. Details: ' + error)
  }


  module.exports = db