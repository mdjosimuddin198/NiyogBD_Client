import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Banar from "../home/Banar";
import LogIn from "../page/auth/LogIn";
import Register from "../page/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Banar },
      { path: "auth/login", Component: LogIn },
      { path: "auth/register", Component: Register },
    ],
  },
]);

export default router;
