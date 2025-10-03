import { Router } from "express";
export const studentsRouter = Router();
studentsRouter.get("/", (_req, res) => res.status(501).json({ message: "Not implemented" }));
