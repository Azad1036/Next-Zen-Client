import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MainContextProviderContext } from "../provider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(MainContextProviderContext);

  if (loading) {
    return (
      <>
        <div>
          <span className="loading loading-dots loading-xl"></span>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to={"/login"}></Navigate>
    </div>
  );
};

export default PrivateRouter;
