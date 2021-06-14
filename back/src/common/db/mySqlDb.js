const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'PFParYslCj',
  database: 'PFParYslCj',
  password: 'JjPbr03jH1',
});

module.exports = { connection };
