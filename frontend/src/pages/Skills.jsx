const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux Toolkit",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className=" dark:bg-black dark:text-white max-w-6xl mx-auto py-24 px-6">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Skills
        </h2>

        <p className="text-zinc-400 mt-4">
          Technologies I use to build modern web applications.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="
            px-6 py-4
            rounded-xl
            dark:bg-zinc-900
            border border-zinc-800
            hover:border-indigo-500
            hover:-translate-y-2
            hover:shadow-lg hover:shadow-indigo-500/20
            transition-all duration-300
            cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}