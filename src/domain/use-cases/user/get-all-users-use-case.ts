import { UserRepositoryInterface } from "../../interfaces/repositories/user-repository-interface";
import { GetAllUsersUseCaseInterface } from "../../interfaces/use-cases/user/get-all-users-use-case-interface";

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
