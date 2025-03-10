import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MainContextProviderContext } from "../provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { LoginAccount, setUser } = useContext(MainContextProviderContext);
  const navigate = useNavigate();
  // User Data
  const { handleSubmit, register } = useForm();

  const handleLoginForm = (data) => {
    const { email, password } = data;

    LoginAccount(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        {
          user && toast.success("You have successfully Login!");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        {
          errorMessage && toast.error("Email or Password is Wrong");
        }
      });
  };

  return (
    <div className="min-h-screen font-ibm-plex flex items-center justify-center bg-gray-50 p-4">
      <div className="relative bg-white p-6 rounded-2xl shadow-lg w-full max-w-md border border-gray-200 transition-all duration-500 hover:shadow-indigo-500/50">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4 font-montserrat">
          Login
        </h2>

        <form onSubmit={handleSubmit(handleLoginForm)}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition-all duration-300 placeholder-gray-400"
              placeholder="Enter your email"
              required
              {...register("email")}
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition-all duration-300 placeholder-gray-400"
              placeholder="Enter your password"
              required
              {...register("password")}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-10 right-2 cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              {showPassword ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <Link className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline transition">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="relative w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold overflow-hidden group hover:bg-indigo-700 transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:animate-shine"></span>
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-2 font-poppins">
            Other Login in System
          </p>
          <div className="flex justify-center gap-3 mb-4">
            <button className="relative w-12 h-12 flex items-center justify-center bg-red-500 text-white rounded-full group overflow-hidden hover:bg-red-600 transition-all duration-300 hover:shadow-red-400/50 hover:scale-110">
              <FaGoogle size={20} />
            </button>
            <button className="relative w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full group overflow-hidden hover:bg-gray-900 transition-all duration-300 hover:shadow-gray-500/50 hover:scale-110">
              <FaGithub size={20} />
            </button>
          </div>
          <Link
            to="/register"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Need an account?{" "}
            <span className="font-semibold text-indigo-600">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
