import { RegisterUserRequest, RegisterUserResponse } from '../../model/dto/user/register-user-dto';
import { createRegisterUserQuery } from '../../model/queries/user/create-user';
import { findUser, insertNewUser } from '../../dao/user-dao';
import { ExistingUserError } from '../../util/application/error';

const executeRegisterUser = async (req: RegisterUserRequest): Promise<RegisterUserResponse> => {
  // check if user exist
  const checkUser = await findUser(req.userId, req.body.emailAddress);
  if (checkUser) {
    throw new ExistingUserError(`User already exists`);
  }

  // Proceed to save user if user doesn't exist
  const registerUserQuery = createRegisterUserQuery(req);

  await insertNewUser(registerUserQuery, req.userId);

  return {
    message: 'User successfully Registered'
  };
};

export default executeRegisterUser;
