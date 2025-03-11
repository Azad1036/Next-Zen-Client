import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { MainContextProviderContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateCampaign = () => {
  const { user } = useContext(MainContextProviderContext);
  const UpdateCampaignData = useLoaderData();

  // User Data
  const { handleSubmit, register } = useForm();

  const handleAddCampaignForm = (data) => {
    const {
      photoUrl,
      compaignTitle,
      compaignType,
      donationAmount,
      description,
      date,
    } = data;

    console.log(data);

    fetch(`http://localhost:4000/updateCampaign/${UpdateCampaignData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Campaign",
            text: "Your Campaign Update",
            icon: "success",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops... Try Again",
            text: "Something went wrong!",
          });
        }
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="relative bg-white p-10 rounded-3xl shadow-2xl w-full max-w-4xl border border-gray-200 transition-all duration-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
          <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-8 animate-pulse">
            Update Campaign
          </h2>

          <form onSubmit={handleSubmit(handleAddCampaignForm)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Image/Thumbnail URL
                </label>
                <input
                  {...register("photoUrl")}
                  defaultValue={UpdateCampaignData.photoUrl}
                  type="url"
                  className="w-full p-3 bg-gray-100 border-0 border-b-2 border-indigo-300 focus:border-indigo-600 outline-none text-gray-800 placeholder-gray-400 transition-all duration-300 focus:shadow-[0_0_8px_rgba(99,102,241,0.4)] rounded-md"
                  placeholder="Enter image URL"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Campaign Title
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-100 border-0 border-b-2 border-indigo-300 focus:border-indigo-600 outline-none text-gray-800 placeholder-gray-400 transition-all duration-300 focus:shadow-[0_0_8px_rgba(99,102,241,0.4)] rounded-md"
                  defaultValue={UpdateCampaignData.compaignTitle}
                  placeholder="Enter campaign title"
                  required
                  {...register("compaignTitle")}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Campaign Type
                </label>
                <select
                  className="w-full p-3 bg-gray-100 border-0 border-b-2 border-indigo-300 focus:border-indigo-600 outline-none text-gray-700 transition-all duration-300 focus:shadow-[0_0_8px_rgba(99,102,241,0.4)] rounded-md"
                  required
                  {...register("compaignType")}
                  defaultValue={UpdateCampaignData.compaignType}
                >
                  <option value="" disabled>
                    Select campaign type
                  </option>
                  <option value="personal issue">Personal Issue</option>
                  <option value="startup">Startup</option>
                  <option value="business">Business</option>
                  <option value="creative ideas">Creative Ideas</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Minimum Donation Amount
                </label>
                <input
                  type="number"
                  defaultValue={UpdateCampaignData.donationAmount}
                  {...register("donationAmount")}
                  className="w-full p-3 bg-gray-100 border-0 border-b-2 border-indigo-300 focus:border-indigo-600 outline-none text-gray-800 placeholder-gray-400 transition-all duration-300 focus:shadow-[0_0_8px_rgba(99,102,241,0.4)] rounded-md"
                  placeholder="Minimum donation $50"
                  // min="1"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                defaultValue={UpdateCampaignData.description}
                {...register("description")}
                className="w-full p-3 bg-gray-100 border-0 border-b-2 border-indigo-300 focus:border-indigo-600 outline-none text-gray-800 placeholder-gray-400 transition-all duration-300 focus:shadow-[0_0_8px_rgba(99,102,241,0.4)] rounded-md"
                placeholder="Enter campaign description"
                rows="4"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  defaultValue={UpdateCampaignData.date}
                  className="w-full p-3 bg-gray-100 border-0 border-b-2 border-indigo-300 focus:border-indigo-600 outline-none text-gray-700 transition-all duration-300 focus:shadow-[0_0_8px_rgba(99,102,241,0.4)] rounded-md"
                  required
                  {...register("date")}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  User Email
                </label>
                <input
                  {...register("email")}
                  defaultValue={user?.email}
                  readOnly
                  type="email"
                  className="w-full p-3 border-0 border-b-2 border-gray-300 bg-gray-200 text-gray-600 rounded-md outline-0"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">
                User Name
              </label>
              <input
                {...register("userName")}
                defaultValue={
                  user?.displayName ? user.displayName : "UserName Not Found"
                }
                readOnly
                type="text"
                className="w-full p-3 border-0 border-b-2 border-gray-300 bg-gray-200 text-gray-600 rounded-md outline-0"
              />
            </div>

            <button
              type="submit"
              className="relative w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] hover:scale-105"
            >
              Add Campaign
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCampaign;
