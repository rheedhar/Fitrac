import { RegisterUserRequest } from '../../dto/user/register-user-dto';

export type RegisterUserQuery = ReturnType<any>;

export const createRegisterUserQuery = (req: RegisterUserRequest): RegisterUserQuery => {
  return {
    name: 'register user',
    text:
      'INSERT INTO users (user_id, first_name, last_name, gender, date_of_birth, email_address, account_status, weight, weight_unit, height, height_unit, bmr) ' +
      'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
    values: [
      req.userId,
      req.body.firstName,
      req.body.lastName,
      req.body.gender,
      req.body.dateOfBirth,
      req.body.emailAddress,
      req.body.accountStatus,
      req.body.weight,
      req.body.weightUnit,
      req.body.height,
      req.body.heightUnit,
      req.body.bmr
    ]
  };
};

export const findUserQuery = `SELECT user_id, email_address FROM users WHERE user_id = $1 OR email_address = $2`;
