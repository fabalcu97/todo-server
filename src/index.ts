import 'module-alias/register';
import 'reflect-metadata';
console.clear();

import { Server } from '@baseClasses';
import middleWares from './server/middleware';
import routers from './server/routers';
import { databaseConnectionOptions } from '@db';

import graphqlSchema from './server/graphql';

const app = new Server({
  port: 8000,
  databaseConnectionOptions,
  middleWares,
  routers,
  apolloServerOptions: {
    logger: {
      debug: (message?: any) => console.debug('message =>', message),
      info: (message?: any) => console.debug('message =>', message),
      warn: (message?: any) => console.debug('message =>', message),
      error: (message?: any) => console.debug('message =>', message),
    },
    schema: graphqlSchema,
  },
});

app.startServer();
