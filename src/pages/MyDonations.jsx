import { useContext } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";

const MyDonations = () => {
  const { user } = useContext(MainContextProviderContext);
  return (
    <div>
      <h1>My Donations {user?.email} </h1>
    </div>
  );
};

export default MyDonations;
