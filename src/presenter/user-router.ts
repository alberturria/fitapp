import express, { Request, Response } from "express";
import { GetAllUsersUseCaseInterface } from "../domain/interfaces/use-cases/user/get-all-users-use-case-interface.js";

function userRouter(getAllUsersUseCase: GetAllUsersUseCaseInterface) {
  const router = express.Router();

  router.get("/", async (_req: Request, res: Response) => {
    try {
      const users = await getAllUsersUseCase.execute();
      res.send(users);
    } catch (err) {
      res.status(500).send({ message: "Error fetching users" });
    }
  });

  return router;
}

export { userRouter };
