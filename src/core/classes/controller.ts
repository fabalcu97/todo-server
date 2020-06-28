import { IControllerArgs } from "@interfaces";

export class BaseController {
  private mMethod: string;
  private mPath: string;

  constructor(args: IControllerArgs) {
    console.debug("args =>", args);
  }

  public main = (args: IControllerArgs) => {};
  public sendError = (error: any, callback?: Function) => {};
}
