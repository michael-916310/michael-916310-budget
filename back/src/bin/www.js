const app = require('../app');
const { DEV_PORT } = require('../common/config');
const { connectToDB } = require('../common/db/mongodb');
const logger = require('./../common/logging/logger');

require('../common/db/connectMySqlDb');
require('../common/db/initMySqlTables');

const port = process.env.PORT || DEV_PORT;

app.listen(port, () =>
  logger.info(`server listening at http://localhost:${port}`)
);

connectToDB();
