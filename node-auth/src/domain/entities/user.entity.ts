//best practice, name it just User... but for readability, as we are learning clean architecture, it's ok
export class UserEntity {
  public constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: string[],
    public img?: string
  ) {}
}
