import React, { useContext, useEffect, useState } from "react";
import UserCompaignslist from "../components/UserCompaignslist";
import { MainContextProviderContext } from "../provider/AuthProvider";

const MyCampaign = () => {
  const [myCampaignData, setMyCampaignData] = useState([]);
  const { user } = useContext(MainContextProviderContext);

  useEffect(() => {
    if (user.email) {
      fetch(`https://next-zen-server.vercel.app/myCampaign/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyCampaignData(data));
    }
  }, [user]);
  return (
    <div>
      <UserCompaignslist
        myCampaignData={myCampaignData}
        setMyCampaignData={setMyCampaignData}
      />
    </div>
  );
};

export default MyCampaign;
