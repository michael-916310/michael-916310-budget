const logger = require('../logging/logger');
const { dbIsAlive, dbPool } = require('./connectMySqlDb');

// -------------------------
// helper for reference population
// -------------------------
const loadOneColumnRefData = (data, tableRows, tableName) => {
  data.forEach((name) => {
    if (tableRows.filter((row) => row.name === name).length === 0) {
      dbPool.execute(`insert into ${tableName} (name) values ("${name}")`);
      logger.info(`expenseGroups table: inserted "${name}"`);
    } else {
      //logger.info(`expenseGroups table: row exist "${name}"`);
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

    const createExpenseRecords = `create table if not exists expenseRecords(
      id int primary key auto_increment,
      period varchar(10) not null,
      day int not null,
      date datetime not null,
      expenseGroupId int not null,
      expenseItemId int not null,
      description varchar(500),
      amount numeric(18,2)  not null,
      FOREIGN KEY (expenseGroupId) REFERENCES expenseGroups (id),
      FOREIGN KEY (expenseItemId) REFERENCES expenseItems (id)
    )`;

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
      }).then(() => {
        dbPool.execute(createExpenseRecords);
      });

    logger.info('check tables finished');
  } else {
    logger.error(`Create and populate tables is fail. dbIsAlive:false`);
  }
});
