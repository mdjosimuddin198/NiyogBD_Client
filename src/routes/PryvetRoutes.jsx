import React from "react";
import useAuth from "../hooks/useAuth";
import Loading from "../page/Loading";
import { Navigate, useLocation } from "react-router";

const PryvetRoutes = ({ children }) => {
  const { logedInUser, loading } = useAuth();
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }
  if (logedInUser && logedInUser?.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PryvetRoutes;
