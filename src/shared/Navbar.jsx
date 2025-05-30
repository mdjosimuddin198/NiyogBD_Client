import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { div, img } from "motion/react-client";

const Navbar = () => {
  const { logedInUser, logOutUser } = useAuth();

  const signOutUser = () => {
    logOutUser().then(() => {
      console.log("logOut done");
      toast.success("user logOut successfully");
    });
  };
  const links = (
    <>
      <li className="ml-3">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-3">
        {logedInUser && <NavLink to={"/add_job"}>Add Job</NavLink>}
      </li>
    </>
  );
  return (
    <div className="navbar  bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-xl">
          NiYog<span>BD</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {logedInUser ? (
          <>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                <img className="w-12" src={logedInUser.photoURL} />
              </div>
            </div>
            <button onClick={signOutUser} className="btn">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link className="btn" to="/auth/login">
              Log In
            </Link>
            <Link className="btn" to="/auth/register">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
