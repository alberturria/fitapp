import { DataSource, Repository } from "typeorm";
import { UserEntity } from "../../domain/entities/user.js";
import { UserDataSourceInterface } from "../interfaces/data-sources/user-data-source-interfaces.js";
import { User } from "./postgres/models/user.js";

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
