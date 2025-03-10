import { Link } from "react-router-dom";

const UserCompaignslist = ({ myCampaignData }) => {
  return (
    <div className="font-ibm-plex">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          My Campaigns
        </h1>

        {/* Table wrapper for mobile scrolling */}
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                  Campaign Name
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                  Donation Amount
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {myCampaignData && myCampaignData.length > 0 ? (
                myCampaignData.map((campaign) => (
                  <tr
                    key={campaign._id}
                    className="bg-gray-50 hover:bg-gray-100 transition duration-300"
                  >
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-800 font-medium text-center">
                      {campaign.compaignTitle}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-800 text-center">
                      {campaign.donationAmount}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-800 text-center">
                      {campaign.date}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 text-center">
                      <div className="flex flex-row space-x-4 justify-center">
                        <Link
                          to={`/campaign/${campaign._id}`}
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition duration-300"
                        >
                          Update
                        </Link>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 hover:scale-105 transition duration-300"
                          // Add Delete functionality here
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
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
