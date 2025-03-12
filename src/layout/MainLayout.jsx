import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/footer";
import Theme from "../components/Theme";

const MainLayout = () => {
  return (
    <div>
      <Theme/>
      <Navber />
      <div className="min-h-[calc(100vh-252px)] container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
