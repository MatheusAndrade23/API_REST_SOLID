import { hash } from "bcryptjs";
import { UsersRepositoryInterface } from "@/repositories/users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists";

interface RegisterUseCaseInterface {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  execute = async ({ name, email, password }: RegisterUseCaseInterface) => {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    });
  };
}
