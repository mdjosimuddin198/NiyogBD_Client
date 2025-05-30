import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Banar from "../home/Banar";
import LogIn from "../page/auth/LogIn";
import Register from "../page/auth/Register";
import AddJob from "../page/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Banar },
      { path: "auth/login", Component: LogIn },
      { path: "auth/register", Component: Register },
      { path: "add_job", Component: AddJob },
    ],
  },
]);

export default router;
