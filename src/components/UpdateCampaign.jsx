import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { MainContextProviderContext } from "../provider/AuthProvider";

const UpdateCampaign = () => {
  const { user, theme } = useContext(MainContextProviderContext);
  const [userName, setUserName] = useState("Not Found");
  const [loading, setLoading] = useState(false);

  // React Hook Form
  const { handleSubmit, register, reset } = useForm();

  const handleUpdateCampaignForm = (data) => {
    setLoading(true);
    fetch("http://localhost:4000/updateCampaign", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your campaign has been updated.",
            icon: "success",
          });
          reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No changes were made!",
          });
        }
      });
  };

  useEffect(() => {
    if (user?.displayName) {
      setUserName(user.displayName);
    }
  }, [user]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 py-10 transition-all duration-500 ${
        theme === "synthwave" ? " text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className={`relative p-10 rounded-3xl shadow-2xl w-full max-w-4xl border transition-all duration-500 ${
          theme === "synthwave"
            ? "bg-[#2D2D44] border-gray-700 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            : "bg-white border-gray-200 hover:shadow-lg"
        }`}
      >
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-8 animate-pulse">
          Update Campaign
        </h2>

        <form onSubmit={handleSubmit(handleUpdateCampaignForm)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-medium mb-2">Image/Thumbnail URL</label>
              <input
                {...register("photoUrl")}
                type="url"
                className="w-full p-3 rounded-md border focus:ring focus:ring-indigo-200 transition"
                placeholder="Enter image URL"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Campaign Title</label>
              <input
                type="text"
                {...register("campaignTitle")}
                className="w-full p-3 rounded-md border focus:ring focus:ring-indigo-200 transition"
                placeholder="Enter campaign title"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-medium mb-2">Campaign Type</label>
              <select {...register("campaignType")} className="w-full p-3 rounded-md border focus:ring focus:ring-indigo-200 transition" required>
                <option value="" disabled>Select campaign type</option>
                <option value="personal issue">Personal Issue</option>
                <option value="startup">Startup</option>
                <option value="business">Business</option>
                <option value="creative ideas">Creative Ideas</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">Minimum Donation Amount</label>
              <input
                type="number"
                {...register("donationAmount")}
                className="w-full p-3 rounded-md border focus:ring focus:ring-indigo-200 transition"
                placeholder="Minimum donation $50"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Description</label>
            <textarea
              {...register("description")}
              className="w-full p-3 rounded-md border focus:ring focus:ring-indigo-200 transition"
              placeholder="Enter campaign description"
              rows="4"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-medium mb-2">Deadline</label>
              <input type="date" {...register("date")} className="w-full p-3 rounded-md border focus:ring focus:ring-indigo-200 transition" required />
            </div>

            <div>
              <label className="block font-medium mb-2">User Email</label>
              <input {...register("email")} defaultValue={user?.email} readOnly type="email" className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-gray-600" />
            </div>
          </div>

          <div className="mb-8">
            <label className="block font-medium mb-2">User Name</label>
            <input {...register("userName")} value={userName} readOnly type="text" className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-gray-600" />
          </div>

          <button
            type="submit"
            className={`relative w-full py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 text-white ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-500 to-pink-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] hover:scale-105"
            }`}
            disabled={loading}
          >
            {loading ? "Updating Campaign..." : "Update Campaign"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampaign;