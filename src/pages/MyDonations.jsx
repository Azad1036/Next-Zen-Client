import { useContext, useEffect, useState } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";
import MyDonationlist from "./MyDonationlist";

const MyDonations = () => {
  const [myDonationsitem, setMyCampaignData] = useState([]);
  const { user } = useContext(MainContextProviderContext);

  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost:4000/myDonation/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyCampaignData(data));
    }
  }, [user]);
  return (
    <div>
      <MyDonationlist myDonationsitem={myDonationsitem} />
    </div>
  );
};

export default MyDonations;
