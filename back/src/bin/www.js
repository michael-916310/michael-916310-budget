const app = require('../app');
const { DEV_PORT } = require('../common/config');
const { connectToDB } = require('../common/db/mongodb');
const { connection } = require('./../common/db/mySqlDb');

const port = process.env.PORT || DEV_PORT;

app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}`)
);

connectToDB();
connection.connect(( err )=>{
  if (err) {
    return console.error(`$Error:{err}`);
  } else {
    console.log('Подключение к серверу MySQL успешно установлено');
  }
});
