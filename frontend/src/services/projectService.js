import api from "./axios";

// Fetch all videos from the server
export const getProjects = () =>
  // Send GET request to retrieve all videos
  api.get("/projects");

// Fetch a single video by its ID
export const getProject = (id) =>
  // Send GET request to retrieve video details
  api.get(`/projects/${id}`);

// Upload a new video
export const addProject = (data) =>
  // Send POST request with video details
  api.post("/projects/", data);

// Delete a video using its ID
export const deleteProject = (id) =>
  // Send DELETE request to remove the video
  api.delete(`/projects/${id}`);

