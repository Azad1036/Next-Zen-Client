import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MainContextProviderContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const DetailsCampaign = () => {
  const data = useLoaderData();
  const { user, theme } = useContext(MainContextProviderContext);
  const [userName, setUserName] = useState("Not Found");

  const {
    _id,
    photoUrl,
    campaignTitle,
    campaignType,
    donationAmount,
    description,
    date,
  } = data;

  const today = new Date("2025-03-13");
  today.setHours(0, 0, 0, 0);
  console.log(new Date("2025-03-13"), date, today);

  useEffect(() => {
    if (user?.displayName) {
      setUserName(user.displayName);
    }
  }, [user]);

  const handleDonationUser = () => {
    if (!user) {
      Swal.fire("Error!", "You must be logged in to donate!", "error");
      return;
    }

    const userData = {
      email: user.email,
      userName,
      campaignTitle,
      campaignType,
      donationAmount,
      date,
    };

    fetch("https://next-zen-server.vercel.app/donationUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.insertedId) {
          Swal.fire("Success!", "Your donation has been recorded", "success");
        } else {
          Swal.fire("Error!", "Something went wrong!", "error");
        }
      })
      .catch(() =>
        Swal.fire("Error!", "Server error. Please try again later.", "error")
      );
  };

  return (
    <div
      className={`max-w-2xl mx-auto p-6 transition-all duration-300 ${
        theme === "synthwave" ? "text-white" : "text-gray-900"
      }`}
    >
      <div
        className={`rounded-lg shadow-md p-5 border ${
          theme === "synthwave"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-300"
        }`}
      >
        <img
          src={photoUrl}
          alt={campaignTitle}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4">{campaignTitle}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-lg font-semibold mt-3 text-blue-500">
          💰 Minimum Donation: ${donationAmount}
        </p>
        <p className="text-red-500 mt-1">⏳ Deadline: {date}</p>
        <p className="text-purple-500 mt-1">📢 Campaign Type: {campaignType}</p>
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
