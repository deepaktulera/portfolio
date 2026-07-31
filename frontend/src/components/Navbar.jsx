import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-200/10 dark:bg-black/80 dark:text-white backdrop-blur border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-400">
          DS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="hover:text-indigo-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-indigo-400 transition"
          >
            About
          </Link>

          <Link
            to="/skills"
            className="hover:text-indigo-400 transition"
          >
            Skills
          </Link>

          <Link
            to="/projects"
            className="hover:text-indigo-400 transition"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-indigo-400 transition"
          >
            Contact
          </Link>

          <Link
            to="/admin"
            className="rounded-lg bg-indigo-600 px-4 py-2 hover:bg-indigo-500 transition"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute right-2 w-40 bg-zinc-700 rounded-2xl backdrop-blur-3xl md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-indigo-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="hover:text-indigo-400"
          >
            About
          </Link>

          <Link
            to="/skills"
            onClick={closeMenu}
            className="hover:text-indigo-400"
          >
            Skills
          </Link>

          <Link
            to="/projects"
            onClick={closeMenu}
            className="hover:text-indigo-400"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="hover:text-indigo-400"
          >
            Contact
          </Link>

          <Link
            to="/admin"
            onClick={closeMenu}
            className="rounded-lg bg-indigo-600 px-5 py-2 hover:bg-indigo-500"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;