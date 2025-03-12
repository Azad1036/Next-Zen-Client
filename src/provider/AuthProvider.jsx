import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";

// Main Provider Context Api
export const MainContextProviderContext = createContext();
// Google Provider
const googleProvider = new GoogleAuthProvider();
// Github Provider
const githubProvider = new GithubAuthProvider();
// Twitter Provider
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  // Create New Account
  const createNewAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const LoginAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Github Login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // Twitter Login
  const twitterLogin = () => {
    return signInWithPopup(auth, twitterProvider);
  };

  // Update Profile
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // SignOut User
  const signOutUser = () => {
    return signOut(auth);
  };

  const info = {
    user,
    setUser,
    loading,
    theme,
    setTheme,
    createNewAccount,
    LoginAccount,
    updateUserProfile,
    signOutUser,
    googleLogin,
    githubLogin,
    twitterLogin,
  };

  // user Store
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  return (
    <div>
      <MainContextProviderContext.Provider value={info}>
        {children}
      </MainContextProviderContext.Provider>
    </div>
  );
};

export default AuthProvider;
