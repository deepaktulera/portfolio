import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminLayout() {
  return (
    <div className="min-h-screen dark:bg-black dark:text-white">
      <Navbar />

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
export default AdminLayout