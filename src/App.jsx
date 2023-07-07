import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Splitscreen from "./pages/splitscreen/Splitscreen";
import Home from "./pages/home/Home";
import Schedule from "./pages/schedule/Schedule";
import Login from "./pages/login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Splitscreen />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
