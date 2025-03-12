import { useContext } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";

const MyDonationlist = ({ myDonationsitem }) => {
  const { theme } = useContext(MainContextProviderContext);

  return (
    <div className={`max-w-4xl mx-auto py-10 transition-all duration-500 ${
      theme === "synthwave" ? " text-white" : " text-gray-900"
    }`}>
      <h2 className="text-2xl font-bold text-center mb-6">My Donations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myDonationsitem.length > 0 ? (
          myDonationsitem.map((campaign) => (
            <div
              key={campaign._id}
              className={`shadow-md rounded-lg p-4 border transition-all duration-500 hover:scale-105 ${
                theme === "synthwave"
                  ? "bg-[#2D2D44] border-gray-700 hover:bg-[#3A3A5A]"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <h3 className="text-xl font-semibold">{campaign?.compaignTitle}</h3>
              <p className="text-gray-600">
                Amount Donated: <strong>${campaign?.donationAmount}</strong>
              </p>
              <p className="text-gray-500 text-sm">Date: {campaign?.date}</p>
            </div>
          ))
        ) : (
          <p className="px-6 py-4 text-4xl w-full col-span-2 text-center text-gray-500">
            No Donation available.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyDonationlist;
