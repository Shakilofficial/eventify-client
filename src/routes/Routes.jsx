import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Error from "../components/Shared/Error/Error";
import SignUp from "../components/SignUp/SignUp";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
