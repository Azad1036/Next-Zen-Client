import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";

const AllCampaign = () => {
  const data = useLoaderData();
  const { theme } = useContext(MainContextProviderContext);

  return (
    <div
      className={`font-ibm-plex min-h-screen py-10 transition-colors duration-500 ${
        theme === "synthwave" ? "text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto rounded-lg shadow-lg">
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
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((campaign, index) => (
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
