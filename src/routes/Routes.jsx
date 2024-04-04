import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Error from "../components/Shared/Error/Error";
import SignUp from "../components/SignUp/SignUp";
import Root from "../layout/Root";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import ServiceDetail from "../pages/Services/ServiceDetail";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: (
          <PrivateRoute>
            <BlogDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/blog/${params.id}`),
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/services/${params.id}`),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
