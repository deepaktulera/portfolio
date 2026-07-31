import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}