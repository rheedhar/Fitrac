/**
 * An abstract base error class that other error class will inherit
 */

export abstract class FitracError extends Error {
  status: number;
  protected constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * HTTP Errors
 */
export class BadRequestError extends FitracError {
  constructor(message = 'Bad Request') {
    super(400, message);
  }
}

export class UnauthorizedError extends FitracError {
  constructor(message = 'Unauthorized') {
    super(401, message);
  }
}

export class ExistingUserError extends FitracError {
  constructor(message: string) {
    super(500, message);
  }
}
