import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Contact from "../pages/Contact/Contact";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/service",
            element: <Service></Service>
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

        }
      ]
    },
  ]);

  export default router;