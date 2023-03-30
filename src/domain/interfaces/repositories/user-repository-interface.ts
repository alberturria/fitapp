import { UserEntity } from "../../entities/user";

interface UserRepositoryInterface {
  getUsers(): Promise<UserEntity[]>;
}

export { UserRepositoryInterface };
