const ProjectList = ({ projects, onDelete , onEdit}) => {
  if (!projects.length)
    return (
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className="border border-dashed border-zinc-700 rounded-xl p-8 text-center text-zinc-400">
          No Projects Found
        </div>
      </div>
    );

  return (
    <div className="dark:bg-black dark:text-white md:col-span-2">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="space-y-5">
        {projects.map((project) => (
          <div
            key={project._id}
            className="
              border border-zinc-800
              rounded-xl
              p-5 sm:p-6
              hover:border-indigo-500
              transition
              flex
              flex-col
              md:flex-row
              md:justify-between
              md:items-start
              gap-5
            "
          >
            {/* Project Info */}
            <div className="flex-1">
              <h3 className="text-xl font-bold break-words">
                {project.title}
              </h3>

              <p className="text-zinc-400 mt-2 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => onDelete(project._id)}
              className="
                bg-red-600
                hover:bg-red-500
                transition
                rounded-lg
                px-5
                py-2
                w-full
                md:w-auto
                md:self-start
              "
            >
              Delete
            </button>
            <button
              onClick={() => onEdit(project._id)}
              className="
                bg-blue-600
                hover:bg-blue-500
                transition
                rounded-lg
                px-5
                py-2
                w-full
                md:w-auto
                md:self-start
              "
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;