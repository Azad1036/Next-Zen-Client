import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddNewCampaign from "../pages/AddNewCampaign";
import AllCampaign from "../pages/AllCampaign";
import DetailsCampaign from "../pages/DetailsCampaign";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage";
import UpdateCampaign from "../components/UpdateCampaign";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("http://localhost:4000/campaigns"),
      },
      {
        path: "/allCampaign",
        element: <AllCampaign />,
        loader: () => fetch("http://localhost:4000/campaigns"),
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRouter>
            <AddNewCampaign />
          </PrivateRouter>
        ),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRouter>
            <DetailsCampaign />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/campaign/${params.id}`),
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRouter>
            <MyCampaign />
          </PrivateRouter>
        ),
      },
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivateRouter>
            <UpdateCampaign />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/campaign/${params.id}`),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRouter>
            <MyDonations />
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routers;
