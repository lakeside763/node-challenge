import { CustomError } from '@nc/utils/errors/custom-error';
import { Request, Response } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
};
