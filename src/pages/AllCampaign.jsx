import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";

const AllCampaign = () => {
  const data = useLoaderData();
  const { theme } = useContext(MainContextProviderContext);
  const [sortedData, setSortedData] = useState(data);

  // Sorting Function
  const handleSortByAmount = () => {
    const sorted = [...sortedData].sort((a, b) => 
      (b.donationAmount || 0) - (a.donationAmount || 0)
    );
    setSortedData(sorted);
  };

  return (
    <div
      className={`font-ibm-plex min-h-screen py-10 transition-colors duration-500 ${
        theme === "synthwave" ? "text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <div className="flex justify-end mb-4">
            <button
              onClick={handleSortByAmount}
              className={`px-4 py-2 rounded-lg shadow-md transition-all font-semibold ${
                theme === "synthwave"
                  ? "bg-purple-600 hover:bg-purple-800 text-white"
                  : "bg-indigo-500 hover:bg-indigo-700 text-white"
              }`}
            >
              Sort by Amount
            </button>
          </div>
          <table
            className={`min-w-full border border-gray-200 rounded-lg table-auto ${
              theme === "synthwave" ? "bg-[#2D2D44]" : "bg-white"
            }`}
          >
            <thead>
              <tr
                className={`text-white ${
                  theme === "synthwave"
                    ? "bg-gradient-to-r from-purple-700 to-pink-600"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600"
                }`}
              >
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Number
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Campaign Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Campaign Type
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Donation Amount
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((campaign, index) => (
                <tr
                  key={campaign._id}
                  className={`hover:scale-101 transition duration-300 ${
                    theme === "synthwave"
                      ? "bg-[#1E1E2E] hover:bg-[#2D2D44]"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <td className="px-6 py-4 border-b border-gray-300 font-medium whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 whitespace-nowrap">
                    {campaign.campaignTitle}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 whitespace-nowrap">
                    {campaign.campaignType}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 whitespace-nowrap">
                    {campaign.date}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 whitespace-nowrap">
                    ${campaign.donationAmount || "N/A"}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-left">
                    <Link
                      to={`/campaign/${campaign._id}`}
                      className={`inline-block px-4 py-2 rounded-lg shadow-md transition-all font-semibold text-center w-full sm:w-auto ${
                        theme === "synthwave"
                          ? "bg-purple-600 hover:bg-purple-800 text-white"
                          : "bg-indigo-500 hover:bg-indigo-700 text-white"
                      }`}
                    >
                      See More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCampaign;
