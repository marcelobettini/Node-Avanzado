import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
export class AppRoutes {
  //we do it static because we are not going to do Dependency Injection, thus, we are not going to create instances, we don't need explicit constructor. This class act as a grouper.
  static get routes(): Router {
    const router = Router();

    //todo: define main routes
    router.use("/api/auth", AuthRoutes.routes);
    return router;
  }
}
