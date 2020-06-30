import { IRoutes, ExpressRouter, RouterOptions } from '@interfaces';
import { BaseController } from '@baseClasses';

export abstract class Router {
  private mRouter: ExpressRouter;
  private mBaseUrl: string;
  protected controllers: BaseController[];
  public routes: IRoutes;

  constructor(baseUrl: string, options?: RouterOptions) {
    this.mRouter = ExpressRouter(options);
    this.mBaseUrl = baseUrl;
  }

  public get router(): ExpressRouter {
    this.controllers.forEach((controller: BaseController) => {
      this.mRouter[controller.method](controller.path, controller.mainMethod);
    });
    return this.mRouter;
  }

  public get baseUrl(): string {
    return this.mBaseUrl;
  }

  protected setControllers = (controller) =>
    Object.keys(controller).map((k) => new controller[k]());
}
