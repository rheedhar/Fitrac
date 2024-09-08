import logger from '../util/application/logger';
import { Request, Response, NextFunction } from 'express';
import { FitracError } from '../util/application/error';

/**
 * Middleware for handling all errors in application
 */
const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction): void => {
  if (error instanceof FitracError) {
    logger.error(error.message);
    res.status(error.status).json({ error: error.message });
  } else {
    logger.error({ error }, 'unknown exception caught');
    res.status(500).json({
      error: 'An unknown and unexpected error occured'
    });
  }
};

export default errorHandler;
