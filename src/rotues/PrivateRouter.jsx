import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MainContextProviderContext } from "../provider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(MainContextProviderContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen p-5  min-w-screen">
          <div className="flex space-x-2 animate-pulse">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate state={location.pathname} to={"/login"}></Navigate>
    </div>
  );
};

export default PrivateRouter;
