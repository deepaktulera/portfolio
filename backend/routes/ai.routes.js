import express from "express";
import Project from "../models/Project.model.js";
import {
    chatWithPortfolioAI,
    portfolioAIRateLimiter,
} from "../controllers/ai.controller.js";

const router = express.Router();

router.post(
    "/chat",

    // Rate limit AI requests
    portfolioAIRateLimiter,

    // Load portfolio projects
    async (req, res, next) => {
        try {
            const projects = await Project.find({})
                .select("title description tags githubLink liveLink")
                .lean();

            req.portfolioProjects = projects;
            next();
        } catch (error) {
            console.error("Could not load projects for AI:", error);

            req.portfolioProjects = [];
            next();
        }
    },

    // Gemini AI controller
    chatWithPortfolioAI
);

export default router;