import {RegisterUserRequest} from "../../../main/model/dto/user/register-user-dto";
import executeRegisterUser from "../../../main/service/user/register-user";
import {registerUser} from "../../../main/controller/user-controller";

// Mock execute register user
jest.mock("../../../main/service/user/register_user");
describe("Register User", ()=> {
    const firstName = "test first name";
    const lastName = "test last name";
    const gender = "test gender";
    const dateOfBirth = "01-01-2000";
    const emailAddress = "test@emailaddress.com";
    const accountStatus = "Activated";
    const weight = "100";
    const weightUnit = "lbs";
    const height = "1.50"
    const heightUnit = "cm";
    const bmr = "10";

    const request = {
        body: {
            firstName,
            lastName,
            gender,
            dateOfBirth,
            emailAddress,
            accountStatus,
            weight,
            weightUnit,
            height,
            heightUnit,
            bmr
        }
    } as RegisterUserRequest;

    const executeRegisterUserResponse = {
        message: "User successfully registered"
    }


    it("should call execute register user and return a response", async()=> {
        // given there is a valid input
        (executeRegisterUser as jest.Mock).mockResolvedValue(executeRegisterUserResponse);

        // when
        const result = await registerUser(request);

        // then
        expect(executeRegisterUser).toHaveBeenCalledTimes(1);
        expect(result).toEqual(executeRegisterUserResponse);

    })
});