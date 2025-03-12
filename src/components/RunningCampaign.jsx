import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainContextProviderContext } from "../provider/AuthProvider";

const RunningCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { theme } = useContext(MainContextProviderContext);

  useEffect(() => {
    fetch("http://localhost:4000/runningCampaigns")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
      })
      .catch((error) => console.error("Error fetching campaigns:", error));
  }, []);

  return (
    <div
      className={`container mx-auto p-6 transition-colors duration-500 rounded-xl ${
        theme === "synthwave" ? "bg-[#1C1C2E] text-white" : "bg-[#FDFDFD] text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Running Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div
            key={campaign._id}
            className={`border p-6 rounded-lg shadow-xl flex flex-col justify-between ${
              theme === "synthwave" ? "bg-[#2D2D44]" : "bg-white"
            }`}
          >
            <img
              src={campaign.photoUrl}
              alt={campaign.compaignTitle}
              className="w-full h-44 object-cover rounded-lg"
            />
            <div className="flex-grow mt-4">
              <h3 className="text-xl font-semibold">{campaign.compaignTitle}</h3>
              <p className="text-gray-500 mt-2">{campaign.description}</p>
              <p className="text-blue-400 font-medium mt-2">Type: {campaign.compaignType}</p>
              <p className="text-green-500 font-bold">Min Donation: ${campaign.donationAmount}</p>
              <p className="text-gray-400 text-sm mt-2">
                By: {campaign.userName} ({campaign.email})
              </p>
              <p className="text-gray-400 text-sm">Deadline: {campaign.date}</p>
            </div>
            <div className="mt-5 flex justify-start"> {/* বাম পাশে সরানো হলো */}
              <Link
                to={`/campaign/${campaign._id}`}
                className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                  theme === "synthwave"
                    ? "bg-purple-600 hover:bg-purple-800 text-white"
                    : "bg-blue-600 hover:bg-blue-800 text-white"
                }`}
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10"> {/* এইটাও বাম পাশে সরানো হলো */}
        <Link
          to={"/allCampaign"}
          className={`px-8 py-3 rounded-lg font-semibold transition-all shadow-md ${
            theme === "synthwave"
              ? "bg-purple-600 hover:bg-purple-800 text-white"
              : "bg-blue-600 hover:bg-blue-800 text-white"
          }`}
        >
          See More Campaigns
        </Link>
      </div>
    </div>
  );
};

export default RunningCampaign;
