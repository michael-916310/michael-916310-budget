const mysql = require('mysql2');
const logger = require('../logging/logger');
const {
  mySQL: { HOST, USER, DATABASE, PASSWORD },
} = require('../config');

// -------------------------
// create connection pool
// -------------------------
const dbPool = mysql
  .createPool({
    connectionLimit: 5,
    host: HOST,
    user: USER,
    database: DATABASE,
    password: PASSWORD,
  })
  .promise();

// -------------------------
// check db health
// return promise with flag <dbIsAlive>
// -------------------------
const dbIsAlive = () => {
  return dbPool
    .execute('select 1')
    .then(() => {
      logger.info('dbIsAlive:success');
      return Promise.resolve({ dbIsAlive: true });
    })
    .catch((err) => {
      logger.error('dbIsAlive:fail ' + err);
      return Promise.resolve({ dbIsAlive: false });
    });
};

// -------------------------
// helper for reference population
// -------------------------
const loadOneColumnRefData = (data, tableRows, tableName) => {
  data.forEach((name) => {
    if (tableRows.filter((row) => row.name === name).length === 0) {
      dbPool.execute(`insert into ${tableName} (name) values ("${name}")`);
      logger.info(`expenseGroups table: inserted "${name}"`);
    } else {
      logger.info(`expenseGroups table: row exist "${name}"`);
    }
  });
};

// -------------------------
// create tables
// populate references
// -------------------------
dbIsAlive().then((res) => {
  if (res.dbIsAlive) {
    logger.info('check tables started');

    const createExpenseGroup = `create table if not exists expenseGroups(
      id int primary key auto_increment,
      name varchar(255) not null
    )`;
    const expenseGroupData = ['Отпуск Калининград', 'Текущий бюджет', 'Покраска машины'];

    const createExpenseItems = `create table if not exists expenseItems(
      id int primary key auto_increment,
      name varchar(255) not null
    )`;
    const expenseItemsData = [
      'Самолет', 'Жилье', 'Экскурсии', 'Разное', 'Машина',
      'Кафэ и рестораны', 'Продукты', 'Одежда', 'Обувь', 'Обучение',
      'Бытовая химия', 'Косметика', 'Украшения', 'Расходники',
      'Здоровье', 'Красота', 'Такси', 'Телефон', 'Интернет', 'Алкоголь',
      'Танцы', 'Проезд', 'Проезд Эльзы', 'Сотовый', 'Очки', 'Товары для дома'
    ];

    dbPool
      .execute(createExpenseGroup)
      .then(() => {
        logger.info('check tables: expenseGroup table exist');
        return dbPool.execute(`select name from expenseGroups`);
      })
      .then(([rows]) => {
        loadOneColumnRefData(expenseGroupData, rows, 'expenseGroups');
      })
      .then(() => {
        dbPool.execute(createExpenseItems);
      })
      .then(() => {
        logger.info('check tables: expenseItems table exist');
        return dbPool.execute(`select name from expenseItems`);
      })
      .then(([rows]) => {
        loadOneColumnRefData(expenseItemsData, rows, 'expenseItems');
      });
  } else {
    logger.error(`Create and populate tables is fail. dbIsAlive:false`);
  }
});

module.exports = {};
