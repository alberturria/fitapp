import { UserEntity } from "../../../entities/user.js";

interface GetAllUsersUseCaseInterface {
  execute(): Promise<UserEntity[]>;
}

export { GetAllUsersUseCaseInterface };
