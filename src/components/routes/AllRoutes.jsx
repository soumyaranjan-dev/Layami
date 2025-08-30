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
import Profile from "../../pages/dashboard/pages/profile/Profile";
import ResetPass from "../../pages/resetpassword/ResetPass";
import AdminDashboard from "../../pages/admindashboard/AdminDashboard";
import Allsongs from "../../pages/admindashboard/pages/allsongs/Allsongs";
import PostSongs from "../../pages/admindashboard/pages/postsongs/PostSongs";
import Playsongui from "../playsongui/Playsongui";

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
      path: "/reset",
      element: <ResetPass />,
    },
    {
      path: "/playsong",
      element: <Playsongui />,
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
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/admindashboard",
      element: (
        <>
          <Navbar />
          <Private>
            <AdminDashboard />
          </Private>
        </>
      ),
      children: [
        {
          path: "allsongs",
          element: <Allsongs />,
        },
        {
          path: "addsong",
          element: <PostSongs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={MyRoutes} />;
};

export default AllRoutes;
