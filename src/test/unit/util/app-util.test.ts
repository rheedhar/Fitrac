import { asyncRoute } from '../../../main/util/application/util';
import { Request, Response, NextFunction } from 'express';

describe('Async Route Method', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  let routeMethod: jest.Mock;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
    routeMethod = jest.fn();
  });

  it('should call the route method and be successful with default code', async () => {
    // given
    const mockData = { message: 'success' };
    routeMethod.mockResolvedValue(mockData);
    const handler = asyncRoute(routeMethod);

    // when
    await handler(req as Request, res as Response, next);

    // then
    expect(routeMethod).toHaveBeenCalledWith(req);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData);
    expect(next).not.toHaveBeenCalled();
  });

  it('should call the route method and be successful with custom code', async () => {
    // given
    const mockData = { message: 'success' };
    routeMethod.mockResolvedValue(mockData);
    const handler = asyncRoute(routeMethod, 201);

    // when
    await handler(req as Request, res as Response, next);

    // then
    expect(routeMethod).toHaveBeenCalledWith(req);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockData);
    expect(next).not.toHaveBeenCalled();
  });

  it('should call the route method and throw an error', async () => {
    // given
    const mockError = new Error('Something wrong happened');
    routeMethod.mockRejectedValue(mockError);
    const handler = asyncRoute(routeMethod);

    // when
    await handler(req as Request, res as Response, next);

    // then
    expect(routeMethod).toHaveBeenCalledWith(req);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(mockError);
  });
});
