import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Landing from "../../pages/landing/Landing";
import Signup from "../../pages/signup/Signup";
import Signin from "../../pages/signin/Signin";
import Dashboard from "../../pages/dashboard/Dashboard";

import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import DefaultDashboard from "../../pages/dashboard/pages/default/DefaultDashboard";
import Explore from "../../pages/dashboard/pages/explore/Explore";
import Playlist from "../../pages/dashboard/pages/playlist/Playlist";
import Private from "../private/Private";

const AllRoutes = () => {
  const MyRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Navbar />
          <Private>
            <Dashboard />
          </Private>
          <Footer />
        </>
      ),
      children: [
        {
          path: "",
          element: <DefaultDashboard />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "playlist",
          element: <Playlist />,
        },
      ],
    },
  ]);

  return <RouterProvider router={MyRoutes} />;
};

export default AllRoutes;
