import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import projectRoutes from "./routes/project.route.js";
import authRoutes from "./routes/auth.routes.js";
import cors from 'cors'

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())

connectDB();

app.use("/projects", projectRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});