import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
// import axios from "axios";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [logedInUser, setLogedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // createUser
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setLogedInUser(user);
      // if (user?.email) {
      //   const userData = { email: user?.email };
      //   axios
      //     .post("http://localhost:3000/jwt_token", userData, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log("data after saveing token ", res.data);
      //     })
      //     .catch((err) => console.log(err));
      // }
    });
    return () => unsubscribe();
  }, []);

  //   signInUser
  const sighnInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update user

  const updatedUser = (userdata) => {
    return updateProfile(auth.currentUser, userdata);
  };

  //   logoutUser

  const logOutUser = () => {
    return signOut(auth);
  };

  const authData = {
    createAccount,
    sighnInUser,
    logedInUser,
    setLogedInUser,
    loading,
    updatedUser,
    logOutUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
