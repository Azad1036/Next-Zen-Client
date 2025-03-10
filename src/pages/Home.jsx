

import Banner from "../components/Banner";

import FeaturedDonations from "../components/FeaturedDonations";
import HowItWorks from "../components/HowItWorks";
import RunningCampaign from "../components/RunningCampaign";

const Home = () => {
  
  return (
    <div>
      <Banner />
      <RunningCampaign  />
      <FeaturedDonations/>
      <HowItWorks/>
    </div>
  );
};

export default Home;
