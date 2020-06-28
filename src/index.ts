import "module-alias/register";

import App from "./server/app";
import { dummyMiddleware } from "./server/middlewares";
import * as morgan from "morgan";
import { Router } from "@baseClasses";

const middleWares = [dummyMiddleware, morgan("dev")];

const routers = [new Router("/hello")];

const app = new App(8000, middleWares, routers);

app.listen();
