import {
  Request,
  Response,
  NextFunction,
  IRoute,
  Router as IExpressRouter,
  RouterOptions,
} from 'express';
import * as httpStatus from 'http-status-codes';
import { MethodsEnum } from './enums';
import { BaseController, Router } from '../classes';
import {
  Connection as IDBConnection,
  ConnectionOptions as IDatabaseConnectionOptions,
} from 'typeorm';
import {
  ApolloServer as IApolloServer,
  ApolloServerExpressConfig as IApolloServerExpressConfig,
} from 'apollo-server-express';

type KeysEnum<T> = { [P in keyof Required<T>]: any };
export type IRouteType = KeysEnum<Omit<IRoute, 'path' | 'stack'>>;

type IBaseExpressFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

type IMiddleWare = IBaseExpressFunction;

type IController = IBaseExpressFunction;

type IServer = {
  port?: number;
  databaseConnectionOptions?: IDatabaseConnectionOptions;
  middleWares?: IMiddleWare[];
  routers?: Router[];
  statics?: string[];
  apolloServerOptions?: IApolloServerExpressConfig;
};

interface IControllerArgs {
  req: Request;
  res: Response;
  next: NextFunction;
}

interface IRoutes {
  [path: string]: {
    method: string;
    controller: IController;
  };
}

type ControllerParams = Parameters<BaseController['mainMethod']>;

export {
  IMiddleWare,
  IController,
  Request,
  Response,
  NextFunction,
  IControllerArgs,
  IServer,
  httpStatus,
  IDBConnection,
  IRoutes,
  IApolloServer,
  IApolloServerExpressConfig,
  IExpressRouter as ExpressRouter,
  RouterOptions,
  MethodsEnum,
  IDatabaseConnectionOptions,
  ControllerParams,
};
