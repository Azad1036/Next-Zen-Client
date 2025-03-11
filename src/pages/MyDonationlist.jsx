// import { Link } from "react-router-dom";

// const MyDonationlist = ({ MyDonationsitem }) => {
//   return (
//     <div className="font-ibm-plex">
//       <div className="container mx-auto py-10 px-4">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
//         My Donations
//         </h1>

//         {/* Responsive Table */}
//         <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
//           <table className="min-w-full bg-white rounded-lg">
//             <thead>
//               <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm">
//                 <th className="px-6 py-4 text-center font-semibold uppercase tracking-wide">
//                   Campaign Name
//                 </th>
//                 <th className="px-6 py-4 text-center font-semibold uppercase tracking-wide">
//                   Donation Amount
//                 </th>
//                 <th className="px-6 py-4 text-center font-semibold uppercase tracking-wide">
//                   Date
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {MyDonationsitem && MyDonationsitem.length > 0 ? (
//                 MyDonationsitem.map((campaign) => (
//                   <tr
//                     key={campaign._id}
//                     className="border-b border-gray-300 hover:bg-gray-100 transition duration-300"
//                   >
//                     <td className="px-6 py-4 text-gray-800 text-center font-medium">
//                       {campaign?.data?.compaignTitle}
//                     </td>
//                     <td className="px-6 py-4 text-gray-800 text-center">
//                       ${campaign?.data?.donationAmount}
//                     </td>
//                     <td className="px-6 py-4 text-gray-800 text-center">
//                       {campaign?.data?.date}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
//                     No campaigns available.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyDonationlist;

const MyDonationlist = ({ myDonationsitem }) => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">My Donations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myDonationsitem.length > 0 ? (
          myDonationsitem.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <h3 className="text-xl font-semibold">
                {campaign?.data?.compaignTitle}
              </h3>
              <p className="text-gray-600">
                Amount Donated:{" "}
                <strong>${campaign?.data?.donationAmount}</strong>
              </p>
              <p className="text-gray-500 text-sm">
                Date: {new Date(campaign?.data?.date).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="px-6 py-4 text-4xl w-full col-span-2  text-center text-gray-500">
            No Donation available.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyDonationlist;
