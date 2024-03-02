import { Response, Request } from "express";
import { AuthRepository, RegisterUserDto } from "../../domain";
//aquí sí vamos a usar inyección de dependencias, esta clase necesita constructor explícito porque creará instancias.

export class AuthController {
  public constructor(private readonly authRepository: AuthRepository) {}

  //aquí no declaramos los métodos con async, aunque podríamos, solo porque Express recomienda como best practice no hacerlo.
  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.authRepository
      .register(registerUserDto!)
      .then((user) => res.json(user))
      .catch((error) => res.status(500).json(error));
  };
  loginUser = (req: Request, res: Response) => {
    res.json("loginUser controller");
  };
}
