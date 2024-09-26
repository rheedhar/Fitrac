import { findUser, insertNewUser } from '../../../main/dao/user-dao';
import pool from '../../../main/model/connection/db-connect';
import { RegisterUserQuery } from '../../../main/model/queries/user/create-user';
import logger from '../../../main/util/application/logger';

jest.mock('../../../main/model/connection/db-connect');
jest.mock('../../../main/util/application/logger');

describe('User DAO Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test insert new user
  describe('Insert a new user', () => {
    const userQuery = {
      name: 'register user',
      text: 'insert data into db',
      values: ['data']
    } as RegisterUserQuery;

    it('should save a user query', async () => {
      // given
      const userId = '12345';
      (pool.query as jest.Mock).mockResolvedValue({ rowCount: 1 });

      // when
      await insertNewUser(userQuery, userId);

      // then
      expect(pool.query).toHaveBeenCalledWith(userQuery);
      expect(pool.query).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenCalledWith('Query successfully executed');
    });

    it('should throw an error if a query fails', async () => {
      // given
      const userId = '12345';
      const mockError = new Error('Internal database error');
      (pool.query as jest.Mock).mockRejectedValue(mockError);

      // when & then
      await expect(insertNewUser(userQuery, userId)).rejects.toThrow(mockError);
      expect(logger.error).toHaveBeenCalledWith(
        `An error has occurred while trying to save user ${userId}`
      );
      expect(pool.query).toHaveBeenCalledTimes(1);
    });
  });

  describe('Find User', () => {
    const userId = '12345';
    const emailAddress = 'testemail@test.com';
    const mockUser = { userId, emailAddress };

    it('should find a user and return true', async () => {
      // given
      (pool.query as jest.Mock).mockResolvedValue({ rows: [mockUser] });

      //when
      const result = await findUser(userId, emailAddress);

      // then
      expect(result).toBe(true);
      expect(pool.query).toHaveBeenCalledTimes(1);
      expect(pool.query).toHaveBeenCalledWith(expect.any(String), [userId, emailAddress]);
    });

    it('should find a user and return false', async () => {
      // given
      (pool.query as jest.Mock).mockResolvedValue({ rows: [] });

      //when
      const result = await findUser(userId, emailAddress);

      // then
      expect(result).toBe(false);
      expect(pool.query).toHaveBeenCalledTimes(1);
      expect(pool.query).toHaveBeenCalledWith(expect.any(String), [userId, emailAddress]);
    });

    it('should throw an error if query fails', async () => {
      // given
      const mockError = new Error('Internal database error');
      (pool.query as jest.Mock).mockRejectedValue(mockError);

      //when
      await expect(findUser(userId, emailAddress)).rejects.toThrow(mockError);

      // then
      expect(pool.query).toHaveBeenCalledTimes(1);
      expect(pool.query).toHaveBeenCalledWith(expect.any(String), [userId, emailAddress]);
      expect(logger.error).toHaveBeenCalledWith(
        `An error has occurred while trying to find user ${userId}`
      );
    });
  });
});
