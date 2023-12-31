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
import Buy from "../components/Buy/Buy";
import Errorpage from "../pages/ErrorPage/Errorpage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/services.json')
      },
      {
        path: "/buy",
        element: <PrivateRoute><Buy></Buy></PrivateRoute>
      },
      {
        path: "/service",
        element: <PrivateRoute><Service></Service></PrivateRoute>,
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
      },


    ]
  },
]);

export default router;