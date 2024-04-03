import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Error from "../components/Shared/Error/Error";
import SignUp from "../components/SignUp/SignUp";
import Root from "../layout/Root";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import ServiceDetail from "../pages/Services/ServiceDetail";
import Services from "../pages/Services/Services";

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
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:id",
        element: <ServiceDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/services/${params.id}`),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
