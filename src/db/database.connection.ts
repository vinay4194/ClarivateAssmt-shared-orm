import { AppDataSource } from "../../ormconfig";

export const connectToDatabase = async () => {
	try {
		await AppDataSource.initialize();
		console.log("Database connected successfully.");
	} catch (error) {
		console.error("Database connection error:", error);
	}
};
