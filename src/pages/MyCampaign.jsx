import React, { useContext, useEffect, useState } from "react";
import UserCompaignslist from "../components/UserCompaignslist";
import { MainContextProviderContext } from "../provider/AuthProvider";

const MyCampaign = () => {
  const [myCampaignData, setMyCampaignData] = useState([]);
  const { user } = useContext(MainContextProviderContext);
  console.log(myCampaignData);

  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost:4000/myCampaign/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyCampaignData(data));
    }
  }, [user]);
  return (
    <div>
      <UserCompaignslist  />
    </div>
  );
};

export default MyCampaign;
