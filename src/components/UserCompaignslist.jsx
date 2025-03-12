import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";

const UserCompaignslist = ({ myCampaignData }) => {
  const { theme } = useContext(MainContextProviderContext);

  return (
    <div
      className={`font-ibm-plex min-h-screen py-10 transition-all duration-500 ${
        theme === "synthwave" ? "text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto">
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table
            className={`min-w-full border rounded-lg transition-all duration-500 ${
              theme === "synthwave" ? "bg-[#2D2D44] border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <thead>
              <tr
                className={`text-white transition-all duration-500 ${
                  theme === "synthwave"
                    ? "bg-gradient-to-r from-purple-700 to-pink-600"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600"
                }`}
              >
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  No.
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Campaign Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Donation Amount
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {myCampaignData && myCampaignData.length > 0 ? (
                myCampaignData.map((campaign, index) => (
                  <tr
                    key={campaign._id}
                    className={`hover:scale-101 transition duration-300 ${
                      theme === "synthwave" ? "bg-[#1E1E2E] hover:bg-[#2D2D44]" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <td className="px-6 py-4 border-b border-gray-300 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      {campaign.compaignTitle}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      ${campaign.donationAmount}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      {campaign.date}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      <div className="flex flex-row space-x-4">
                        <Link
                          to={`/updateCampaign/${campaign._id}`}
                          className={`px-4 py-2 rounded-lg shadow-md transition-all font-semibold ${
                            theme === "synthwave"
                              ? "bg-purple-600 hover:bg-purple-800 text-white"
                              : "bg-indigo-500 hover:bg-indigo-700 text-white"
                          }`}
                        >
                          Update
                        </Link>
                        <button
                          className={`px-4 py-2 rounded-lg shadow-md transition-all font-semibold ${
                            theme === "synthwave"
                              ? "bg-red-500 hover:bg-red-700 text-white"
                              : "bg-red-500 hover:bg-red-700 text-white"
                          }`}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center">
                    No campaigns available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCompaignslist;
