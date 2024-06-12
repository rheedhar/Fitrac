import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsyncRouteMethod = (req: Request) => Promise<any>;

/**
 * Helper method for async route
 * @param routeMethod the route handler function to execute
 * @param successStatusCode status code to return when the request is successful. Default is 200
 */

const asyncRoute = (routeMethod: AsyncRouteMethod, successStatusCode = 200) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await routeMethod(req);
      res.status(successStatusCode).json(result);
    } catch (error: unknown) {
      next(error);
    }
  };
};

export { asyncRoute };
