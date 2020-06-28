import { BaseController } from "core/classes/controller";
import { IControllerArgs, httpStatus } from "@interfaces";

export class HelloWorldController extends BaseController {
  private mPath: string = "/hello";

  sayHelloWorld(args: IControllerArgs) {
    const { res, req, next } = args;
    res.send("Hello World!");
    res.status(httpStatus.OK);
    next();
  }

  public get path(): string {
    return this.mPath;
  }
}
