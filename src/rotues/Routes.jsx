import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddNewCampaign from "../pages/AddNewCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allCampaign",
        element: <AllCampaign />,
      },
      {
        path: "/addCampaign",
        element: <AddNewCampaign />,
      },
      {
        path: "/myCampaign",
        element: <MyCampaign />,
      },
      {
        path: "/myDonations",
        element: <MyDonations />,
      },
    ],
  },
]);

export default routers;
