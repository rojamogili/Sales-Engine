import { createConnection } from 'typeorm';

import { Product } from '../entity/Products';
import { SaleOrder } from '../entity/SaleOrder';
import { SaleOrderProduct } from '../entity/SaleOrderProduct';


require('dotenv').config();

export const connection = createConnection({
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [Product, SaleOrder, SaleOrderProduct],
  synchronize: false,
  logging: true,
  migrationsRun: true,
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
});
