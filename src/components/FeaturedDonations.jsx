import { useContext } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";

const FeaturedDonations = () => {
  const { theme } = useContext(MainContextProviderContext);

  return (
    <section
      className={`py-10 text-center transition-all duration-500 ${
        theme === "synthwave" ? "bg-[#1E1E2E] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Featured Donations</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        <div
          className={`p-5 rounded-xl shadow-lg transition-all duration-500 ${
            theme === "synthwave"
              ? "bg-[#2D2D44] border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h3 className="text-xl font-semibold">Help Build a School</h3>
          <p className="text-gray-600">Raised: $5,000 / Goal: $10,000</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: "50%" }}></div>
          </div>
          <p className="text-gray-500 mt-2">🎯 150 Donors | ⏳ 10 Days Left</p>
        </div>
        <div
          className={`p-5 rounded-xl shadow-lg transition-all duration-500 ${
            theme === "synthwave"
              ? "bg-[#2D2D44] border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h3 className="text-xl font-semibold">Support Local Artists</h3>
          <p className="text-gray-600">Raised: $3,500 / Goal: $7,000</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: "50%" }}></div>
          </div>
          <p className="text-gray-500 mt-2">🎯 95 Donors | ⏳ 7 Days Left</p>
        </div>
        <div
          className={`p-5 rounded-xl shadow-lg transition-all duration-500 ${
            theme === "synthwave"
              ? "bg-[#2D2D44] border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h3 className="text-xl font-semibold">Medical Emergency Fund</h3>
          <p className="text-gray-600">Raised: $8,000 / Goal: $12,000</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: "66%" }}></div>
          </div>
          <p className="text-gray-500 mt-2">🎯 200 Donors | ⏳ 5 Days Left</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDonations;
