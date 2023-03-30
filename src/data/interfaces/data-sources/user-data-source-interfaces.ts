import { UserEntity } from "../../../domain/entities/user";

interface UserDataSourceInterface {
  getAll(): Promise<UserEntity[]>;
}

export { UserDataSourceInterface };
