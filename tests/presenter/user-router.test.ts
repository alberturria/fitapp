import request from "supertest";
import { UserEntity } from "../../src/domain/entities/user";
import { UserRepositoryInterface } from "../../src/domain/interfaces/repositories/user-repository-interface";
import { GetAllUsersUseCaseInterface } from "../../src/domain/interfaces/use-cases/user/get-all-users-use-case-interface";
import { GetAllUsersUseCase } from "../../src/domain/use-cases/user/get-all-users-use-case";
import { userRouter } from "../../src/presenter/user-router";

import server from "../../src/server";

class GetAllUsersUseCaseMock implements GetAllUsersUseCase {
  userRepository: UserRepositoryInterface;
  execute = () => {
    throw new Error("Method not implemented");
  };
}

describe("User Router", () => {
  let getAllUsersUseCaseMock: GetAllUsersUseCaseInterface;

  beforeAll(() => {
    getAllUsersUseCaseMock = new GetAllUsersUseCaseMock();
    server.use("/user", userRouter(getAllUsersUseCaseMock));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /user", () => {
    test("should return 200 status code with data", async () => {
      const expectedData: [UserEntity] = [
        {
          id: 1,
          firstName: "John",
          lastName: "Smith",
          age: 22
        }
      ];
      jest
        .spyOn(getAllUsersUseCaseMock, "execute")
        .mockImplementation(() => Promise.resolve(expectedData));

      const response = await request(server).get("/user");

      expect(response.status).toBe(200);
      expect(getAllUsersUseCaseMock.execute).toBeCalledTimes(1);
      expect(response.body).toStrictEqual(expectedData);
    });

    test("GET /user returns 500 on use case error", async () => {
      jest
        .spyOn(getAllUsersUseCaseMock, "execute")
        .mockImplementation(() => Promise.reject(Error()));
      const response = await request(server).get("/user");
      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({ message: "Error fetching users" });
    });
  });
});
