import { RegisterUserRequest, RegisterUserResponse } from '../../model/dto/user/register-user-dto';
import pool from '../../model/connection/db_connect';
import logger from '../../util/application/logger';
import { createRegisterUserQuery } from '../../model/queries/user/create_user';

const executeRegisterUser = async (req: RegisterUserRequest): Promise<RegisterUserResponse> => {
  const registerUserQuery = createRegisterUserQuery(req);

  try {
    logger.info(
      `Executing query: ${registerUserQuery.text} with values ${JSON.stringify(registerUserQuery.values)}`
    );
    await pool.query(registerUserQuery);
    logger.info(`Query successfully executed`);
    return {
      message: 'User successfully Registered'
    };
  } catch (error: unknown) {
    logger.warn(`An error has occurred while trying to save Fitrac user ${req.userId}`);
    throw error;
  }
};

export default executeRegisterUser;
