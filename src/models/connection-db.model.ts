import * as dotenv from 'dotenv';
import { Sequelize, DataTypes, QueryTypes } from 'sequelize';
import { DB } from '../environment/environment';

dotenv.config();

const sequelize = new Sequelize(
  DB.NAME,
  DB.USER,
  DB.PASSWORD,
  {
    port: DB.PORT,
    host: DB.HOST,
    dialect: 'mysql'
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export { sequelize, DataTypes, QueryTypes };
