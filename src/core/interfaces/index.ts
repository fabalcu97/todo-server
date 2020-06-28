import {
  Request,
  Response,
  NextFunction,
  IRoute,
  Router as ExpressRouter,
  RouterOptions,
} from "express";
import * as httpStatus from "http-status-codes";

type KeysEnum<T> = { [P in keyof Required<T>]: any };
export type IRouteType = KeysEnum<Omit<IRoute, "path" | "stack">>;

type IBaseExpressFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

type IMiddleWare = IBaseExpressFunction;

type IController = IBaseExpressFunction;

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

export {
  IMiddleWare,
  IController,
  Request,
  Response,
  NextFunction,
  IControllerArgs,
  httpStatus,
  IRoutes,
  ExpressRouter,
  RouterOptions,
};
