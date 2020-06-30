import {
  MethodsEnum,
  Request,
  Response,
  NextFunction,
  httpStatus,
} from '@interfaces';

export class BaseController {
  protected mMethod: MethodsEnum;
  protected mPath: string;
  protected req: Request;
  protected res: Response;
  protected body: any;
  private next: NextFunction;

  protected declare controllerMethod: () => void;

  public get method(): string {
    return this.mMethod;
  }

  public get path(): string {
    return this.mPath;
  }

  public mainMethod = (req: Request, res: Response, next: NextFunction) => {
    this.req = req;
    this.body = req.body;
    this.res = res;
    this.next = next;
    try {
      this.controllerMethod();
    } catch (error) {
      this.error(httpStatus.INTERNAL_SERVER_ERROR, error);
    }
  };

  protected success = (code: number = httpStatus.OK, body: any = {}) => {
    this.res.status(code).send(body);
    this.next();
  };

  protected error = (
    code: number = httpStatus.INTERNAL_SERVER_ERROR,
    message?: string,
  ) => {
    this.res
      .status(code)
      .send(message ? message : httpStatus.getStatusText(code));
    this.next();
  };
}
