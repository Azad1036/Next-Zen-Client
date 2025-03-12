import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MainContextProviderContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const DetailsCampaign = () => {
  const data = useLoaderData();
  const { user, theme } = useContext(MainContextProviderContext);
  const [userName, setUserName] = useState("Not Found");

  const { _id, photoUrl, compaignTitle, donationAmount, description, date } = data;

  useEffect(() => {
    if (user?.displayName) {
      setUserName(user.displayName);
    }
  }, [user]);

  const handleDonationUser = () => {
    const userData = { email: user.email, userName, data };

    fetch("http://localhost:4000/donationUser", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Success!", "Your Campaign Added", "success");
        } else {
          Swal.fire("Error!", "Something went wrong!", "error");
        }
      });
  };

  return (
    <div className={`max-w-2xl mx-auto p-6 transition-all duration-300 ${
      theme === "synthwave" ? " text-white" : " text-gray-900"
    }`}>
      <div className={`rounded-lg shadow-md p-5 border ${
        theme === "synthwave" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
      }`}>
        <img src={photoUrl} alt={compaignTitle} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-2xl font-bold mt-4">{compaignTitle}</h1>
        <p className="text-gray-600 synthwave:text-gray-300 mt-2">{description}</p>
        <p className="text-lg font-semibold mt-3 text-blue-500">💰 Minimum Donation: ${donationAmount}</p>
        <p className="text-red-500 mt-1">⏳ Deadline: {date}</p>
        <button
          onClick={handleDonationUser}
          className={`w-full mt-5 py-2 rounded-md text-lg font-medium transition ${
            theme === "synthwave"
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          ❤️ Donate Now
        </button>
      </div>
    </div>
  );
};

export default DetailsCampaign;
