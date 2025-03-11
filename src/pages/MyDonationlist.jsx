import { Link } from "react-router-dom";

const MyDonationlist = ({ MyDonationsitem }) => {
  return (
    <div className="font-ibm-plex">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        My Donations
        </h1>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm">
                <th className="px-6 py-4 text-center font-semibold uppercase tracking-wide">
                  Campaign Name
                </th>
                <th className="px-6 py-4 text-center font-semibold uppercase tracking-wide">
                  Donation Amount
                </th>
                <th className="px-6 py-4 text-center font-semibold uppercase tracking-wide">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {MyDonationsitem && MyDonationsitem.length > 0 ? (
                MyDonationsitem.map((campaign) => (
                  <tr
                    key={campaign._id}
                    className="border-b border-gray-300 hover:bg-gray-100 transition duration-300"
                  >
                    <td className="px-6 py-4 text-gray-800 text-center font-medium">
                      {campaign?.data?.compaignTitle}
                    </td>
                    <td className="px-6 py-4 text-gray-800 text-center">
                      ${campaign?.data?.donationAmount}
                    </td>
                    <td className="px-6 py-4 text-gray-800 text-center">
                      {campaign?.data?.date}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
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

export default MyDonationlist;