import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email;
      const userInfo = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
      if (currentUser) {
        axiosSecure.post("/jwt", userInfo).then((res) => console.log(res.data));
      } else {
        axiosSecure
          .post("/logout", userInfo)
          .then((res) => console.log(res.data));
      }
    });
    return () => observer();
  }, [axiosSecure]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    loginUser,
    logOutUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthProvider;
