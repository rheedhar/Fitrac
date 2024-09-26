import { findUser, insertNewUser } from '../../../../main/dao/user-dao';
import {
  createRegisterUserQuery,
  RegisterUserQuery
} from '../../../../main/model/queries/user/create-user';
import { ExistingUserError } from '../../../../main/util/application/error';
import executeRegisterUser from '../../../../main/service/user/register-user';
import {
  RegisterUserRequest,
  RegisterUserResponse
} from '../../../../main/model/dto/user/register-user-dto';

jest.mock('../../../../main/dao/user-dao');
jest.mock('../../../../main/model/queries/user/create-user');

describe('Execute Register User', () => {
  const req = {
    userId: '12345',
    body: {
      firstName: 'test fname',
      lastName: 'test lname',
      gender: 'test gender',
      dateOfBirth: '01/01/2001',
      emailAddress: 'test@test.com',
      accountStatus: 'Activated',
      weight: '100',
      weightUnit: 'lbs',
      height: '1.5',
      heightUnit: 'cm',
      bmr: '1000'
    }
  } as RegisterUserRequest;

  afterEach(() => {
    jest.clearAllMocks();
  });

  const userQuery = {
    name: 'register user',
    text: 'insert data into db',
    values: ['data']
  } as RegisterUserQuery;

  const executeRegisterUserResponse = {
    message: 'User successfully Registered'
  } as RegisterUserResponse;

  it('Should throw an error if a user exists', async () => {
    // given
    (findUser as jest.Mock).mockResolvedValue(true);

    // when & then
    await expect(executeRegisterUser(req as RegisterUserRequest)).rejects.toThrow(
      ExistingUserError
    );
    expect(findUser).toHaveBeenCalledTimes(1);
    expect(findUser).toHaveBeenCalledWith(req.userId, req.body.emailAddress);
    expect(createRegisterUserQuery).not.toHaveBeenCalled();
    expect(insertNewUser).not.toHaveBeenCalled();
  });

  it("Should register a user if a user doesn't already exist", async () => {
    // given
    (findUser as jest.Mock).mockResolvedValue(false);
    (createRegisterUserQuery as jest.Mock).mockReturnValue(userQuery);
    (insertNewUser as jest.Mock).mockResolvedValue({});

    // when
    const result = await executeRegisterUser(req as RegisterUserRequest);

    // then
    expect(findUser).toHaveBeenCalledTimes(1);
    expect(findUser).toHaveBeenCalledWith(req.userId, req.body.emailAddress);
    expect(createRegisterUserQuery).toHaveBeenCalledTimes(1);
    expect(createRegisterUserQuery).toHaveBeenCalledWith(req);
    expect(insertNewUser).toHaveBeenCalledTimes(1);
    expect(insertNewUser).toHaveBeenCalledWith(userQuery, req.userId);
    expect(result).toEqual(executeRegisterUserResponse);
  });
});
