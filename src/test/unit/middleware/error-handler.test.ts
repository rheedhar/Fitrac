import { BadRequestError } from '../../../main/util/application/error';
import errorHandler from '../../../main/middleware/error-handler';
import { Request, Response, NextFunction } from 'express';
import logger from '../../../main/util/application/logger';

jest.mock('../../../main/util/application/logger', () => ({
  error: jest.fn()
}));

describe('Error Handler', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  it('should handle FitracError', () => {
    // given
    const fitracError = new BadRequestError();

    // when
    errorHandler(fitracError, req as Request, res as Response, next);

    // then
    expect(logger.error).toHaveBeenCalledWith('Bad Request');
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Bad Request' });
  });

  it('should handle unknown errors', () => {
    // given
    const unknownError = new Error('An unknown error');

    // when
    errorHandler(unknownError, req as Request, res as Response, next);

    // then
    expect(logger.error).toHaveBeenCalledWith({ error: unknownError }, 'unknown exception caught');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'An unknown and unexpected error occurred'
    });
  });
});
