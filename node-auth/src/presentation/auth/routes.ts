import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDataSourceImpl, AuthRepositoryImpl } from "../../infrastructure";
export class AuthRoutes {
  //we do it static because we are not going to do Dependency Injection, thus, we are not going to create instances. This class act as a grouper.
  static get routes(): Router {
    const router = Router();
    const datasource = new AuthDataSourceImpl();
    const authRepository = new AuthRepositoryImpl(datasource);
    const controller = new AuthController(authRepository);

    //todo: define main routes
    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);
    return router;
  }
}
