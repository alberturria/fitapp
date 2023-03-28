import { UserEntity } from "../../../domain/entities/user.js";

interface UserDataSourceInterface {
  getAll(): Promise<UserEntity[]>;
}

export { UserDataSourceInterface };
