import express from "express";
import {
    addProject,
    deleteProject,
    getProjects
} from "../controllers/project.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", verifyToken, addProject);
router.delete("/:id", verifyToken, deleteProject);

export default router;