import {
  Mail,
  Phone,
  MapPin,
  Link,
  Link2,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="dark:bg-black dark:text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities,
            collaborations, or simply having a chat about web development.
            Feel free to reach out anytime!
          </p>
            {/* Social Links */}
            <div className="flex gap-5 pt-4">
              <a
                href="https://github.com/deepaktulera"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full  hover:bg-indigo-600 transition"
              >
                <Link size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/deepak-singh-a063832b3/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full  hover:bg-indigo-600 transition"
              >
                <Link2 size={22} />
              </a>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-800 ">
              <div className="flex items-center gap-4">
                <Mail className="text-indigo-400" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-zinc-400">
                    deepakstulera003@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 ">
              <div className="flex items-center gap-4">
                <MapPin className="text-indigo-400" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-zinc-400">
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <form className="space-y-5 p-8 rounded-2xl border border-zinc-800 ">
            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg  px-4 py-3 outline-none border border-zinc-700 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg  px-4 py-3 outline-none border border-zinc-700 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-lg  px-4 py-3 outline-none border border-zinc-700 focus:border-indigo-500 resize-none"
              />
            </div>

            <button
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-lg font-medium"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}