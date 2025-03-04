import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <div className="min-h-[calc(100vh-252px)] container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
