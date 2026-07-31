export default function ProjectCard({ project }) {
  return (
    <div
      className="
      dark:bg-black dark:text-white 
      group
      rounded-2xl
      border border-zinc-800
      overflow-hidden
      hover:border-indigo-500
      hover:-translate-y-3
      transition-all duration-500"
    >
      <div className="p-7">

        <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition">
          {project.title}
        </h3>

        <p className="text-zinc-400 leading-7 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="
              px-3 py-1
              rounded-full
              bg-indigo-600/20
              border border-indigo-500/30
              text-indigo-300
              text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6">

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              GitHub →
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Live →
            </a>
          )}

        </div>

      </div>
    </div>
  );
}