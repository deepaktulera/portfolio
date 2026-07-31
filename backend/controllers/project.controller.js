import Project from "../models/Project.model.js";

export async function getProjects(req, res) {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: projects,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export async function addProject(req, res) {
    try {
        const {
            title,
            description,
            tags,
            githubLink,
            liveLink,
        } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required",
            });
        }

        const project = await Project.create({
            title,
            description,
            tags,
            githubLink,
            liveLink,
        });

        return res.status(201).json({
            success: true,
            message: "Project added successfully",
            data: project,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export async function deleteProject(req, res) {
    try {
        const { id } = req.params;

        const project = await Project.findById(id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }

        await project.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Project deleted successfully",
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}