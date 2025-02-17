import { UserDataSourceInterface } from "../../data/interfaces/data-sources/user-data-source-interfaces";
import { UserEntity } from "../entities/user";
import { UserRepositoryInterface } from "../interfaces/repositories/user-repository-interface";

class UserRepository implements UserRepositoryInterface {
  userDataSource: UserDataSourceInterface;

  constructor(userDataSource: UserDataSourceInterface) {
    this.userDataSource = userDataSource;
  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.userDataSource.getAll();
  }
}

export { UserRepository };
