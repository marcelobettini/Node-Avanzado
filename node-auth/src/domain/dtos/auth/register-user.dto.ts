import { Validators } from "../../../config";

export class RegisterUserDto {
  //constructor privado solo puede llamarse dentro de esta clase
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}
  //este método retorna string? (error) o instancia de DTO
  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;
    if (!name) return ["Missing name"];
    if (!email) return ["Missing email"];
    if (!Validators.email.test(email)) return ["Not valid email"];
    if (!password) return ["Missing password"];
    if (password.length < 8) return ["Password min length is 8"];
    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
