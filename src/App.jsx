import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Splitscreen from "./pages/splitscreen/Splitscreen";
import Home from "./pages/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Splitscreen />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
