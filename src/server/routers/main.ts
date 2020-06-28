import { Router } from "@baseClasses";
import { RouterOptions } from "@interfaces";

export class MainRouter extends Router {
  constructor(baseUrl: string, options: RouterOptions) {
    super(baseUrl, options);

    this.controllers = [];
  }
}
