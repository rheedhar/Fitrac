import { RegisterUserRequest, RegisterUserResponse } from '../model/dto/user/register-user-dto';
import logger from '../util/application/logger';
import executeRegisterUser from '../service/user/register_user';

const registerUser = async (req: RegisterUserRequest): Promise<RegisterUserResponse> => {
  logger.info(`Begin registration of user ${req.userId}`);
  return await executeRegisterUser(req);
};

export { registerUser };
