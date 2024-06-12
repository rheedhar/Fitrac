import { Request } from 'express';

export interface RegisterUserRequest extends Request {
  body: {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    emailAddress: string;
    accountStatus: string;
    weight: string;
    weightUnit: string;
    height: string;
    heightUnit: string;
    bmr: string;
  };
}

export interface RegisterUserResponse {
  message: string;
}
