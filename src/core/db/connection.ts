import { createConnection } from 'typeorm';
import { IDatabaseConnectionOptions } from '@interfaces';

export async function getDatabaseConnection(
  databaseOptions: IDatabaseConnectionOptions,
) {
  return createConnection({
    ...databaseOptions,
  });
}
