import {
  AuthDatasource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain";

export class AuthDataSourceImpl implements AuthDatasource {
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;
    try {
      /* 1. verificar siu correo existe
    2. hash password
    3. mapear response a nuestra entidad
    */
      return new UserEntity("1", name, email, password, ["ADMIN_ROLE"]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }
}
