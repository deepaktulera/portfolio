import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="dark:bg-black dark:text-white relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-5 lg:py-10">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

          {/* Left */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Hi,
              <br />

              I'm{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Deepak Singh
              </span>
            </h1>

            <h2 className="mt-6 text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-300">
              Full Stack MERN Developer
            </h2>

            <p className="mt-6 text-zinc-400 text-base sm:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
              I build responsive, scalable and modern web applications
              using React, Node.js, Express and MongoDB. Passionate
              about writing clean code and creating user-friendly
              digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <button className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-zinc-700 hover:border-indigo-500 hover:bg-zinc-900 transition">
                Resume
                <Download size={18} />
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-14">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-indigo-400">
                  05
                </h3>
                <p className="text-zinc-500">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-indigo-400">
                  10+
                </h3>
                <p className="text-zinc-500">Technologies</p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-indigo-400">
                  6+
                </h3>
                <p className="text-zinc-500">Months Learning</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />

              <img
                src="https://th.bing.com/th/id/OIP.eNRVngsO951_jhkDY3vvOQHaEJ?w=272&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
                alt="Profile"
                className="relative w-64 sm:w-80 md:w-90 lg:w-[400px] aspect-square rounded-4xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}