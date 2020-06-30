import morgan from 'morgan';
import BodyParser from 'body-parser';

import { Request, Response, NextFunction } from '@interfaces';

function dummyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  console.debug('Testing dummy middleware!!');
  next();
}

export default [
  dummyMiddleware,
  morgan('dev'),
  BodyParser.json(),
  BodyParser.urlencoded({ extended: false }),
];
