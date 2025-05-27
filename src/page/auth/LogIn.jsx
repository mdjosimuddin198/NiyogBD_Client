import React from "react";
import Lottie from "lottie-react";
import loginImg from "../../assets/LottieFiles/LoginLottie.json";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const LogIn = () => {
  const { sighnInUser } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    sighnInUser(email, password).then((user) => {
      // console.log(user);
      // console.log("LoginSuccefully");
      toast.success("LogIn Successfully");
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center  lg:w-[600px]">
          <Lottie animationData={loginImg} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <div className="divider">OR</div>
            <button className="btn bg-white text-black border-[#e5e5e5]">
              <FcGoogle />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
