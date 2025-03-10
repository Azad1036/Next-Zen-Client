import { Link, useLoaderData } from "react-router-dom";

const AllCampaign = () => {
  const data = useLoaderData();

  return (
    <div className="font-ibm-plex">
      <div className="container mx-auto py-10">
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
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
                  className="bg-gray-50 hover:bg-gray-100 transition duration-300"
                >
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-800 font-medium">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                    {campaign.compaignTitle}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                    {campaign.compaignType}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                    {campaign.date}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    <Link
                      to={`/campaign/${campaign._id}`}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition duration-300"
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
