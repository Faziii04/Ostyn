import { DatabaseService } from "../services/database.service.js";
import { Router } from "express";
export const healthRouter = Router();
const dbService = new DatabaseService();

healthRouter.get("/", async (req, res) => {
    const dbConnected = await dbService.isConnected();
    res.json({
        status: "OK",
        database: dbConnected ? "Connected" : "Disconnected"
    });
});