import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    fetch("http://localhost:4000/runningCampaigns")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        // setLoading(false);
      })
      .catch((error) => console.error("Error fetching campaigns:", error));
  }, []);

  // if (loading) {
  //     return <div className="text-center">Loading...</div>;
  // }

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-5">Running Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={campaign.photoUrl}
              alt={campaign.compaignTitle}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">
              {campaign.compaignTitle}
            </h3>
            <p className="text-gray-600">{campaign.description}</p>
            <p className="text-blue-500 font-medium">
              Type: {campaign.compaignType}
            </p>
            <p className="text-green-500 font-bold">
              Min Donation: ${campaign.donationAmount}
            </p>
            <p className="text-gray-500 text-sm">
              By: {campaign.userName} ({campaign.email})
            </p>
            <p className="text-gray-500 text-sm">Deadline: {campaign.date}</p>
            <Link
              to={`/campaign/${campaign._id}`}
              className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
      <div className=" text-center my-5">
        <button className="btn btn-primary ">See More</button>
      </div>
    </div>
  );
};

export default RunningCampaign;
