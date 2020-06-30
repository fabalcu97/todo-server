import express from 'express';
import { Application } from 'express';
import {
  IMiddleWare,
  IDBConnection,
  IServer,
  IDatabaseConnectionOptions,
  IApolloServerExpressConfig,
  IApolloServer,
} from '@interfaces';
import { Router } from '@baseClasses';
import { getDatabaseConnection } from '@db';
import { ApolloServer } from 'apollo-server-express';

export class Server {
  private app: Application = express();
  private port: number = 8000;
  private databaseConnectionOptions: IDatabaseConnectionOptions;
  private dbConnection: IDBConnection;
  private apolloServerOptions: IApolloServerExpressConfig;
  private apolloServer: IApolloServer;

  constructor(options: IServer) {
    this.port = options.port;
    this.databaseConnectionOptions = options.databaseConnectionOptions;
    this.apolloServerOptions = options.apolloServerOptions;

    this.middleWares(options.middleWares || []);
    this.routes(options.routers || []);
    this.assets(options.statics || []);
  }

  private middleWares(middleWares: IMiddleWare[]) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(routers: Router[]) {
    routers.forEach((router) => {
      this.app.use(router.baseUrl, router.router);
    });
  }

  private assets(statics: string[]) {
    statics.forEach((s: string) => this.app.use(express.static(s)));
  }

  private async initializeDatabaseConnection() {
    if (!this.databaseConnectionOptions) {
      return;
    }
    try {
      this.dbConnection = await getDatabaseConnection(
        this.databaseConnectionOptions,
      );
    } catch (dbConnectionError) {
      console.error('Error connecting to the database =>', dbConnectionError);
    }
  }

  private async initializeApolloServer() {
    if (!this.apolloServerOptions) {
      return;
    }
    try {
      this.apolloServer = new ApolloServer(this.apolloServerOptions);
      this.apolloServer.applyMiddleware({ app: this.app });
    } catch (apolloServerError) {
      console.error('Error creating apollo server =>', apolloServerError);
    }
  }

  public async startServer() {
    await this.initializeDatabaseConnection();
    await this.initializeApolloServer();
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}
