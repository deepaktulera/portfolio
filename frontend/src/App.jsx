import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRouter";

function App() {
  return <div className="dark:bg-black dark:text-white">
  <RouterProvider router={AppRoutes} />
  </div>
}

export default App;