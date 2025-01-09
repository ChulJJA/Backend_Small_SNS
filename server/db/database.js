import SQ from 'sequelize';
import { config } from '../config.js';

const { host, user, database, password } = config.db;
export const sequalize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
  logging: false,
});
