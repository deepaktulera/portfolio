import { useEffect, useState } from "react";
import {
  getProjects,
  addProject,
  deleteProject,
} from "../services/projectService";
import { loginUser } from "../services/authService";

import AdminLogin from "./AdminLogin";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [token, setToken] = useState(
    localStorage.getItem("adminToken") || ""
  );

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (token) fetchProjects();
  }, [token]);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const res = await loginUser({ username, password });

      localStorage.setItem("adminToken", res.data.token);
      setToken(res.data.token);
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  const handleAddProject = async (project) => {
    try {
      await addProject(project);
      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Project?")) return;

    try {
      await deleteProject(id);
      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    setProjects([]);
  };

  if (!token) return <AdminLogin onLogin={handleLogin} />;

  return (
    <div className="min-h-screen dark:bg-black dark:text-white text-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-500 px-6 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* Left */}
          <div className="xl:col-span-1">
            <ProjectForm onAddProject={handleAddProject} />
          </div>

          {/* Right */}
          <div className="xl:col-span-2">
            <ProjectList
              projects={projects}
              onDelete={handleDelete}
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;