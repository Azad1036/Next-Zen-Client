import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
import { createContext } from "react";
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
  // Create New Account
  const createNewAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const LoginAccount = (email, password) => {
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
  const info = {
    createNewAccount,
    LoginAccount,
    googleLogin,
    githubLogin,
    twitterLogin,
  };
  return (
    <div>
      <MainContextProviderContext.Provider value={info}>
        {children}
      </MainContextProviderContext.Provider>
    </div>
  );
};

export default AuthProvider;
