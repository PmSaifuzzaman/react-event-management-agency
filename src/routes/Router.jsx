import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Contact from "../pages/Contact/Contact";

import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/services.json')
        },
        {
            path: "/service",
            element: <Service></Service>,
            loader: () => fetch('/services.json')

        },
        {
          path: "/servicedetails/:id",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: () => fetch('/services.json')
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/login",
            element: <Login></Login>

        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;