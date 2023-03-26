import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { AppDataSource } from "./data-source.js";
dotenv.config();

AppDataSource.initialize()
  .then(() => {
    const app: Express = express();
    const port = process.env.PORT;
    app.get("/", (_req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
    });

    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${port ?? 4000}`
      );
    });
  })
  .catch((error) => console.error("Error initializing DB: " + error));
