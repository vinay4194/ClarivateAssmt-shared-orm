"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const ormconfig_1 = require("../../ormconfig");
const connectToDatabase = async () => {
    try {
        await ormconfig_1.AppDataSource.initialize();
        console.log("Database connected successfully.");
    }
    catch (error) {
        console.error("Database connection error:", error);
    }
};
exports.connectToDatabase = connectToDatabase;
