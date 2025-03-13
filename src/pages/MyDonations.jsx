import { useContext, useEffect, useState } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";
import MyDonationlist from "./MyDonationlist";

const MyDonations = () => {
  const [myDonationsitem, setMyCampaignData] = useState([]);
  console.log(myDonationsitem);
  const { user } = useContext(MainContextProviderContext);

  useEffect(() => {
    if (user.email) {
      fetch(`https://next-zen-server.vercel.app/myDonation/${user.email}`)
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
