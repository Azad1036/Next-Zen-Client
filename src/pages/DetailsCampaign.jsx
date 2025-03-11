import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MainContextProviderContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const DetailsCampaign = () => {
  const data = useLoaderData();
  const { user } = useContext(MainContextProviderContext);
  const [userName, setUserName] = useState("Not Found");
  const email = user.email;

  const { _id, photoUrl, compaignTitle, donationAmount, description, date } =
    data;

  useEffect(() => {
    if (user?.displayName) {
      setUserName(user.displayName);
    }
  }, [user]);

  const userData = { email, userName, data };

  const handleDonationUser = () => {
    fetch("http://localhost:4000/donationUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your Campaign Added",
            icon: "success",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="shadow-lg p-8 bg-white rounded-xl border border-gray-300 transition-transform duration-300 hover:scale-105">
        <img
          src={photoUrl}
          alt={compaignTitle}
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
        <div className="p-5 text-center">
          <h1 className="text-4xl font-bold text-gray-900">{compaignTitle}</h1>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed font-medium">
            {description}
          </p>
          <p className="text-xl font-semibold mt-4 text-blue-700">
            💰 Minimum Donation: ${donationAmount}
          </p>
          <p className="text-lg text-red-600 mt-2 font-medium">
            ⏳ Deadline: {date}
          </p>
          <button
            onClick={handleDonationUser}
            className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            ❤️ Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCampaign;
