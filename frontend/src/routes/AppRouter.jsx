import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import NotFound from "../pages/NotFound";
import AdminDashboard from "../pages/AdminDashboard"
import AdminLayout from "../layout/AdminLayout";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Project from "../pages/Projects";

const AppRoutes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills/>,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default AppRoutes;