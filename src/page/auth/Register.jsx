import Lottie from "lottie-react";
import registerImg from "../../assets/LottieFiles/RegisterLottie.json";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
const Register = () => {
  const { createAccount, updatedUser, setLogedInUser } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    const { name, password, email, photo } = newUser;
    // console.log(name, email, rest);
    createAccount(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        updatedUser({ displayName: name, photoURL: photo })
          .then(() => {
            console.log(user);
            setLogedInUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((err) => {
            console.log(err);
            setLogedInUser(user);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    toast.success(`Account Create  SuccessFully `);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:w-[600px]">
          <Lottie animationData={registerImg} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              {/* name  */}
              <label className="label text-xl">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* photourl  */}
              <label className="label text-xl">PhotoURL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="PhotoURL"
                required
              />
              {/* email */}
              <label className="label text-xl">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* number  */}
              {/* <label className="label text-xl">Number</label>
              <input
                type="text"
                name="number"
                className="input"
                placeholder="Number"
                required
              /> */}
              {/* password  */}
              <div className="relative">
                <label className="label mt-4">Password</label>
                <input
                  //   type={showPass ? "text" : "password"}
                  type="password"
                  name="password"
                  className="input "
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  //   onClick={handleshowPassword}
                  className="btn absolute right-4"
                >
                  {/* {showPass ? <FiEyeOff></FiEyeOff> : <BsEye></BsEye>} */}
                </button>
              </div>
              {/* end  */}

              <button className="btn btn-neutral mt-4">Register Now</button>
              <p className="text-sm text-base-200">
                Allready have account{" "}
                <Link className="text-blue-400 underline" to="/auth/login">
                  {"   "}
                  Login Now{" "}
                </Link>
              </p>
              {/* {errorMsg && <p className="text-red-400">{errorMsg}</p>}
              {successMsg && (
                <p className="text-green-500">
                  Account have Create SuccessFully
                </p>
              )} */}
            </form>
            <div className="divider">OR</div>
            <button className="btn bg-white text-black border-[#e5e5e5]">
              <FcGoogle />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
