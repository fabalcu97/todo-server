require('dotenv').config();
import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

const base = join(__dirname, '../../..');

const databaseOptions: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: Boolean(process.env.DATABASE_LOGGING),
  synchronize: false,
  entities: [join(base, 'dist/server/models/*.js')],
  migrations: [join(base, 'dist/migrations/*.js')],
  cli: {
    migrationsDir: join('src/migrations/'),
    entitiesDir: join('src/server/models/'),
  },
};

export = databaseOptions;
