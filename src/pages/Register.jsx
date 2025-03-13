import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MainContextProviderContext } from "../provider/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    createNewAccount,
    googleLogin,
    githubLogin,
    twitterLogin,
    setUser,
    theme,
    updateUserProfile,
  } = useContext(MainContextProviderContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegisterForm = (data) => {
    const { fullName, photoURL, email, password } = data;

    createNewAccount(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        updateUserProfile({
          displayName: fullName,
          photoURL: photoURL,
        })
          .then(() => {
            toast.success("You have successfully registered!");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(() => {
        toast.error("Email Already Used");
      });
  };

  // Google Login User
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        {
          user && toast.success("You have successfully registered!");
        }
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = err.message;
        {
          errorMessage && toast.error("Pls try again");
        }
      });
  };

  // Github Login User
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        {
          user && toast.success("You have successfully registered!");
        }
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = err.message;
        {
          errorMessage && toast.error("Pls try again");
        }
      });
  };

  // Twitter Login User
  const handleTwitterLogin = () => {
    twitterLogin()
      .then((result) => {
        const user = result.user;
        {
          user && toast.success("You have successfully registered!");
        }
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = err.message;
        {
          errorMessage && toast.error("Pls try again");
        }
        console.log(err);
      });
  };

  return (
    <div
      className={`min-h-screen font-ibm-plex flex items-center justify-center p-4 transition-all duration-500 ${
        theme === "synthwave" ? " text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className={`relative p-6 rounded-2xl shadow-lg w-full max-w-md border transition-all duration-500 hover:shadow-lg ${
          theme === "synthwave"
            ? "bg-[#2D2D44] border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <h2
          className={`text-2xl font-bold text-center mb-4 font-montserrat ${
            theme === "synthwave" ? "text-purple-400" : "text-indigo-600"
          }`}
        >
          Register
        </h2>

        <form onSubmit={handleSubmit(handleRegisterForm)}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              className={`w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 placeholder-gray-400 ${
                theme === "synthwave"
                  ? "border-gray-500 focus:border-purple-400 text-white"
                  : "border-gray-300 focus:border-indigo-500 text-gray-900"
              }`}
              placeholder="Enter your full name"
              {...register("fullName")}
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className={`w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 placeholder-gray-400 ${
                theme === "synthwave"
                  ? "border-gray-500 focus:border-purple-400 text-white"
                  : "border-gray-300 focus:border-indigo-500 text-gray-900"
              }`}
              placeholder="Enter your email"
              required
              {...register("email")}
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Photo Url</label>
            <input
              type="url"
              className={`w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 placeholder-gray-400 ${
                theme === "synthwave"
                  ? "border-gray-500 focus:border-purple-400 text-white"
                  : "border-gray-300 focus:border-indigo-500 text-gray-900"
              }`}
              placeholder="Enter your PhotoUrl"
              required
              {...register("photoURL")}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className={`w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 placeholder-gray-400 ${
                theme === "synthwave"
                  ? "border-gray-500 focus:border-purple-400 text-white"
                  : "border-gray-300 focus:border-indigo-500 text-gray-900"
              }`}
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
              className="absolute top-10 right-2 cursor-pointer hover:text-indigo-500 transition-colors duration-300"
            >
              {showPassword ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
            </div>
          </div>

          <button
            type="submit"
            className={`relative w-full py-2.5 rounded-lg font-semibold overflow-hidden group transition-all duration-300 active:scale-95 ${
              theme === "synthwave"
                ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/50"
                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/50"
            }`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:animate-shine"></span>
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="mb-2 font-poppins">Other Login Options</p>
          <div className="flex justify-center gap-3 mb-4">
            <button
              onClick={handleGoogleLogin}
              className="w-12 h-12 flex items-center justify-center rounded-full group overflow-hidden transition-all duration-300 hover:scale-110 shadow-lg"
              style={{
                backgroundColor: theme === "synthwave" ? "#E4405F" : "#DB4437",
                color: "white",
                boxShadow:
                  theme === "synthwave"
                    ? "0px 4px 10px rgba(228, 64, 95, 0.5)"
                    : "0px 4px 10px rgba(219, 68, 55, 0.5)",
              }}
            >
              <FaGoogle size={20} />
            </button>
            <button
              onClick={handleGithubLogin}
              className="w-12 h-12 flex items-center justify-center rounded-full group overflow-hidden transition-all duration-300 hover:scale-110 shadow-lg"
              style={{
                backgroundColor: theme === "synthwave" ? "#E4405F" : "#DB4437",
                color: "white",
                boxShadow:
                  theme === "synthwave"
                    ? "0px 4px 10px rgba(228, 64, 95, 0.5)"
                    : "0px 4px 10px rgba(219, 68, 55, 0.5)",
              }}
            >
              <FaGithub size={20} />
            </button>
            <button
              onClick={handleTwitterLogin}
              className="w-12 h-12 flex items-center justify-center rounded-full 
              transition-all duration-300 hover:scale-110 shadow-lg"
              style={{
                backgroundColor: "#1DA1F2", // Twitter Official Blue
                color: "white",
                boxShadow: "0px 4px 10px rgba(29, 161, 242, 0.5)", // Light blue shadow
              }}
            >
              <FaTwitter size={20} />
            </button>
          </div>
          <Link
            to="/login"
            className="transition-colors"
            style={{
              color: theme === "synthwave" ? "#BB86FC" : "#4F46E5",
              fontWeight: "600",
            }}
          >
            Already have an account? <span className="underline">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
