import * as express from "express";
import { Application } from "express";
import { IMiddleWare } from "@interfaces";
import { Router } from "@baseClasses";

class App {
  public app: Application;
  public port: number;

  constructor(port: number, middleWares: any, routers: any) {
    this.app = express();
    this.port = port;

    this.middleWares(middleWares);
    this.routes(routers);
    this.assets();
  }

  private middleWares(middleWares: IMiddleWare[]) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(routers: Router[]) {
    routers.forEach((router) => {
      this.app.use(router.basePath, router.router);
    });
  }

  private assets() {
    this.app.use(express.static("assets"));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;
