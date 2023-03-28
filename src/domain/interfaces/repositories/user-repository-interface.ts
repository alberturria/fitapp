import { UserEntity } from "../../entities/user.js";

interface UserRepositoryInterface {
  getUsers(): Promise<UserEntity[]>;
}

export { UserRepositoryInterface };
