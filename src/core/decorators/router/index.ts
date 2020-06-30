import { Router } from "@baseClasses";
import { IRouteType } from "@interfaces";

const IRouteKeys: IRouteType = {
  "m-search": null,
  checkout: null,
  copy: null,
  delete: null,
  get: null,
  head: null,
  all: null,
  lock: null,
  merge: null,
  mkactivity: null,
  mkcol: null,
  move: null,
  notify: null,
  options: null,
  patch: null,
  post: null,
  purge: null,
  put: null,
  report: null,
  search: null,
  subscribe: null,
  trace: null,
  unlock: null,
  unsubscribe: null,
};

const decorators: { [k: string]: any } = {};

Object.keys(IRouteKeys).forEach((method) => {
  decorators[method] = (path: string) => {
    return function (
      target: Router,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      if (!target.hasOwnProperty("routes")) {
        target.routes = {};
      }
      target.routes[path] = { method: "get", controller: descriptor.value };
    };
  };
});
export const router: { [k: string]: any } = decorators;
