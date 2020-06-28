import { Request, Response, NextFunction } from "express";


export function dummyMiddleware(req: Request, res: Response, next: NextFunction): void {
  console.debug("Testing dummy middleware!!");
  next();
};
