import { DataSource } from "typeorm";
import { User } from "./entity/user";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [User],
	subscribers: [],
	migrations: ["src/migrations/**/*{.js,.ts}"],
});
