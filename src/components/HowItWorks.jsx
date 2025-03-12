import { useContext } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";

const HowItWorks = () => {
  const { theme } = useContext(MainContextProviderContext);

  return (
    <section
      className={`py-10 text-center mt-12 transition-all duration-500 ${
        theme === "synthwave" ? "bg-[#1E1E2E] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {[
          {
            title: "1️⃣ Create a Campaign",
            description: "Set up a fundraising campaign with details and images.",
          },
          {
            title: "2️⃣ Share & Promote",
            description: "Use social media and word of mouth to spread the campaign.",
          },
          {
            title: "3️⃣ Receive Donations",
            description: "Supporters can donate securely, and you can track progress.",
          },
        ].map((step, index) => (
          <div
            key={index}
            className={`p-5 rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 ${
              theme === "synthwave"
                ? "bg-[#2D2D44] border border-gray-700 hover:bg-[#3A3A5A]"
                : "bg-white border border-gray-200 hover:bg-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      <p className="text-blue-500 mt-6 cursor-pointer hover:underline">📖 Read FAQs</p>
    </section>
  );
};

export default HowItWorks;
