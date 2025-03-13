import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainContextProviderContext } from "../provider/AuthProvider";

const RunningCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { theme, user } = useContext(MainContextProviderContext);

  useEffect(() => {
    fetch("https://next-zen-server.vercel.app/runningCampaigns")
      .then((res) => res.json())
      .then((data) => {
        // Get today's date (March 13, 2025) and set time to midnight for accurate comparison
        const today = new Date("2025-03-13");
        today.setHours(0, 0, 0, 0);

        // Filter campaigns where item.date is >= today
        const filteredData = data.filter((item) => {
          const itemDate = new Date(item.date); // Assuming your data has a 'date' property
          return itemDate >= today;
        });

        setCampaigns(filteredData); // Set the filtered data instead of raw data
      })
      .catch((error) => console.error("Error fetching campaigns:", error));
  }, []);

  return (
    <div
      className={`container mx-auto p-6 transition-colors duration-500 rounded-xl ${
        theme === "synthwave" ? " text-white" : "bg-[#FDFDFD] text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
        🔥 Running Campaigns 🔥
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div
            key={campaign._id}
            className={`rounded-xl shadow-lg hover:shadow-2xl p-6 flex flex-col transition-transform duration-300 ${
              theme === "synthwave"
                ? "bg-[#2D2D44] hover:bg-[#353553]"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <img
              src={campaign.photoUrl}
              alt={campaign.campaignTitle}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="flex-grow mt-4 space-y-2">
              <h3 className="text-2xl font-semibold">
                {campaign.campaignTitle}
              </h3>
              <p className="text-gray-500">{campaign.description}</p>
              <p className="text-blue-400 font-medium">
                Type: {campaign.campaignType}
              </p>
              <p className="text-green-500 font-bold">
                Min Donation: ${campaign.donationAmount}
              </p>
              <p className="text-gray-400 text-sm">By: {user?.displayName}</p>
              <p className="text-gray-400 text-sm">Deadline: {campaign.date}</p>
            </div>

            <div className="mt-5">
              <Link
                to={`/campaign/${campaign._id}`}
                className={`px-6 py-3 rounded-lg font-semibold block text-center transition-all ${
                  theme === "synthwave"
                    ? "bg-purple-600 hover:bg-purple-800 text-white"
                    : "bg-blue-600 hover:bg-blue-800 text-white"
                }`}
              >
                🎯 See More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to={"/allCampaign"}
          className={`px-10 py-3 rounded-lg font-semibold shadow-md transition-all text-lg ${
            theme === "synthwave"
              ? "bg-purple-600 hover:bg-purple-800 text-white"
              : "bg-blue-600 hover:bg-blue-800 text-white"
          }`}
        >
          🔍 Explore More Campaigns
        </Link>
      </div>
    </div>
  );
};

export default RunningCampaign;
