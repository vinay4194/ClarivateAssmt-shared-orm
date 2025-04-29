// ormconfig.ts
import { DataSource } from "typeorm";
import { Product } from "./src/entities/product.entity";
import { Category } from "./src/entities/category.entity";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT || "5432", 10),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	entities: [Product, Category],
	migrations: ["./src/migrations/*.ts"],
	synchronize: false,
});
