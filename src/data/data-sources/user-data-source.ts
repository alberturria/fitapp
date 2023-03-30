import { DataSource, Repository } from "typeorm";
import { UserEntity } from "../../domain/entities/user";
import { UserDataSourceInterface } from "../interfaces/data-sources/user-data-source-interfaces";
import { User } from "./postgres/models/user";

class UserDataSource implements UserDataSourceInterface {
  private database: Repository<User>;
  constructor(database: DataSource) {
    this.database = database.getRepository(User);
  }

  async getAll(): Promise<UserEntity[]> {
    const userModels = await this.database.find({});
    return userModels;
  }
}
export { UserDataSource };
