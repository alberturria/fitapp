import { UserEntity } from "../../../entities/user";

interface GetAllUsersUseCaseInterface {
  execute(): Promise<UserEntity[]>;
}

export { GetAllUsersUseCaseInterface };
