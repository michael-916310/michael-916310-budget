const mysql = require('mysql2');
const logger = require('../logging/logger');
const {
  mySQL: { HOST, USER, DATABASE, PASSWORD },
} = require('../config');

const mySQLPool = mysql
  .createPool({
    connectionLimit: 5,
    host: HOST,
    user: USER,
    database: DATABASE,
    password: PASSWORD,
  })
  .promise();

const mySQLIsAlive = () => {
  return mySQLPool
    .execute('select 1')
    .then(() => {
      logger.info('mySQLisAlive:true');
      return Promise.resolve('mySQLisAlive:true');
    })
    .catch((err) => {
      logger.error('mySQLisAlive:false ' + err);
    });
};

module.exports = { mySQLPool, mySQLIsAlive };
