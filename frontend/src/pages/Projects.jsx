import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const res = await getProjects();
      setProjects(res.data.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="dark:bg-black dark:text-white max-w-7xl mx-auto py-24 px-6"
    >
      <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold">
          Featured Projects
        </h2>

        <p className="text-zinc-400 mt-4">
          A collection of applications I've built using the MERN stack.
        </p>

      </div>

      {loading ? (
        <h2 className="text-center text-zinc-400">
          Loading Projects...
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      )}
    </section>
  );
}