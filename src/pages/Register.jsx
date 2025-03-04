import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  // User Data
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegisterForm = (data) => {
    const { fullName, photoUrl, email, password } = data;
    console.log({ fullName, photoUrl, email, password });
  };

  return (
    <div className="min-h-screen font-ibm-plex flex items-center justify-center bg-gray-50 p-4">
      <div className="relative bg-white p-6 rounded-2xl shadow-lg w-full max-w-md border border-gray-200 transition-all duration-500 hover:shadow-indigo-500/50">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4 font-montserrat">
          Register
        </h2>

        <form onSubmit={handleSubmit(handleRegisterForm)}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition-all duration-300 placeholder-gray-400"
              placeholder="Enter your full name"
              {...register("fullName")}
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Photo Url
            </label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition-all duration-300 placeholder-gray-400"
              placeholder="Enter your photo url"
              {...register("photoUrl")}
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password length at least 6 Characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "Password must include uppercase, lowercase, number, special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.password.message}
              </p>
            )}
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-10 right-2 cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              {showPassword ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
            </div>
          </div>

          <button
            type="submit"
            className="relative w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold overflow-hidden group hover:bg-indigo-700 transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:animate-shine"></span>
            Register
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
            to="/login"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Already have an account?{" "}
            <span className="font-semibold text-indigo-600">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
