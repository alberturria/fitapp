import { UserRepositoryInterface } from "../../interfaces/repositories/user-repository-interface.js";
import { GetAllUsersUseCaseInterface } from "../../interfaces/use-cases/user/get-all-users-use-case-interface.js";

class GetAllUsersUseCase implements GetAllUsersUseCaseInterface {
  userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  execute = async () => {
    return await this.userRepository.getUsers();
  };
}

export { GetAllUsersUseCase };
