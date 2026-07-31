import { Code2, Database, Globe, Laptop } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="dark:bg-black dark:text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-indigo-400 uppercase tracking-widest font-semibold">
          About Me
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Passionate About Building
          <span className="text-indigo-400">
            {" "}Modern Web Applications
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-14">

          <div>

            <p className="text-zinc-400 leading-8 text-lg">

              I'm a Full Stack MERN Developer from India who enjoys
              transforming ideas into modern and responsive web
              applications.

              <br /><br />

              I specialize in React, Node.js, Express and MongoDB,
              focusing on building clean user interfaces, REST APIs,
              authentication systems and scalable backend solutions.

              <br /><br />

              I'm continuously learning new technologies and improving
              my development skills by creating real-world projects.

            </p>

          </div>

          <div className="grid  sm:grid-cols-2 gap-6">

            <div className="p-6 rounded-2xl dark:bg-zinc-900 border border-zinc-800 hover:border-indigo-500 transition">

              <Code2 className="text-indigo-400 mb-4" size={34} />

              <h3 className="font-bold text-xl mb-2">
                Frontend
              </h3>

              <p className="text-zinc-400">
                React, JavaScript,
                HTML, CSS,
                Tailwind CSS
              </p>

            </div>

            <div className="p-6 rounded-2xl dark:bg-zinc-900 border border-zinc-800 hover:border-indigo-500 transition">

              <Database className="text-indigo-400 mb-4" size={34} />

              <h3 className="font-bold text-xl mb-2">
                Backend
              </h3>

              <p className="text-zinc-400">
                Node.js,
                Express.js,
                MongoDB,
                REST APIs
              </p>

            </div>

            <div className="p-6 rounded-2xl border dark:bg-zinc-900 border-zinc-800 hover:border-indigo-500 transition">

              <Laptop className="text-indigo-400 mb-4" size={34} />

              <h3 className="font-bold text-xl mb-2">
                Tools
              </h3>

              <p className="text-zinc-400">
                Git,
                GitHub,
                VS Code,
                Postman
              </p>

            </div>

            <div className="p-6 rounded-2xl border dark:bg-zinc-900 border-zinc-800 hover:border-indigo-500 transition">

              <Globe className="text-indigo-400 mb-4" size={34} />

              <h3 className="font-bold text-xl mb-2">
                Goal
              </h3>

              <p className="text-zinc-400">
                Build impactful applications and contribute
                to real-world software products.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}