import { Request, Response } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import server from "./server";
import { userRouter } from "./presenter/user-router";
import { GetAllUsersUseCase } from "./domain/use-cases/user/get-all-users-use-case";
import { UserRepository } from "./domain/repositories/user-repository";
import { UserDataSource } from "./data/data-sources/user-data-source";
import { AppDataSource } from "./data/data-sources/data-source";
dotenv.config();

(async () => {
  AppDataSource.initialize()
    .then((dataSource) => {
      const port = process.env.PORT ?? 4000;
      server.get("/", (_req: Request, res: Response) => {
        console.log(" bbb");
        res.send("Express + TypeScript Server");
      });

      server.use(
        "/users",
        userRouter(
          new GetAllUsersUseCase(
            new UserRepository(new UserDataSource(dataSource))
          )
        )
      );
      server.listen(port, () => {
        console.log(
          `⚡️[server]: Server is running at http://localhost:${port}`
        );
      });
    })
    .catch((error) => console.error("Error initializing DB: " + error));
})();
