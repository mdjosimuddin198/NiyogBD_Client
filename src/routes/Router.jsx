import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Banar from "../home/Banar";
import LogIn from "../page/auth/LogIn";
import Register from "../page/auth/Register";
import AddJob from "../page/AddJob";
import PryvetRoutes from "./PryvetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Banar },
      { path: "auth/login", Component: LogIn },
      { path: "auth/register", Component: Register },
      {
        path: "add_job",
        element: (
          <PryvetRoutes>
            <AddJob></AddJob>
          </PryvetRoutes>
        ),
      },
    ],
  },
]);

export default router;
